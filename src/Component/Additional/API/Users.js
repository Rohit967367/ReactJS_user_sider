import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../DB/DB";
import { getOneStreamLink, getStreamLink } from "../Store/StreamInfo";
import {
  getListVideo,
  openLiveVideoDialog,
  startToster,
} from "../Store/Addition";

export const AddUserOnDB = async (name, user) => {
  const userID = doc(db, "client", user.uid);

  if (userID) {
    const getUserDetail = await getDoc(userID);
    if (!getUserDetail.exists()) {
      try {
        setDoc(userID, {
          name: user.displayName || name,
          email: user.email,
          image: user.photoURL,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }
};

export const FirebaseStreamLinks = (dispatch) => {
  const collectionOfData = collection(db, "links");

  const snapShot = onSnapshot(collectionOfData, (snapShot) =>
    dispatch(
      getStreamLink(
        snapShot.docs.map((doc) => ({
          ...doc.data(),
        }))
      )
    )
  );

  return snapShot;
};

export const FindLiveVideoStreamLink = (eventName, dispatch, linkData) => {
  if (linkData.streamLink) {
    const streamLinkData = linkData.streamLink.filter(
      (streamEventName) => streamEventName.eventName === eventName
    );
    console.log(eventName);

    if (streamLinkData.length === 1) {
      streamLinkData.map((data) =>
        dispatch(
          getOneStreamLink({
            name: data.name,
            record: data.record,
            downstreamUrl: data.downstreamUrl,
            eventName: data.eventName,
            email: data.email,
            streamKey: data.streamKey,
            streamUrl: data.streamUrl,
          })
        )
      );
      console.log(streamLinkData);
      dispatch(openLiveVideoDialog());
    } else if (streamLinkData.length === 0) {
      dispatch(startToster({ msg: "No Event Found", type: "warning" }));
    } else {
      dispatch(startToster({ msg: "Something went wrong", type: "error" }));
    }
  } else {
    dispatch(startToster({ msg: "No Data Found", type: "error" }));
  }
};

export const RecordedVideoList = (dispatch) => {
  const GetList = collection(db, "StreamLink");
  const getListSnapshot = onSnapshot(GetList, (snapShot) =>
    dispatch(getListVideo(snapShot.docs.map((doc) => ({ ...doc.data() }))))
  );
  return getListSnapshot;
};

export const ContactUseMessage = async (email, msg) => {
  const setInCollection = collection(db, "contact-Us");
  await addDoc(setInCollection, {
    name: email,
    msg,
    timestamp: serverTimestamp(),
  });
};
