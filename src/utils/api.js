import axios from 'axios';
import { LINK_LIST_URL, VIDEO_LIST_URL } from '../primitives/constants';

export const getAllData = () => {
    let mergedList = [];
    return axios.get(LINK_LIST_URL).then(file1 => {
        file1 && file1.data && file1.data.entry && (mergedList = [...file1.data.entry]);
        return axios.get(VIDEO_LIST_URL).then(file2 => {
            file2 && file2.data && file2.data.entry && (mergedList = [...mergedList, ...file2.data.entry]);
            return mergedList;
         }).catch(err => {
           console.log('getVideoData error', err);
         })
     }).catch(err => {
       console.log('getLinkData error', err);
     })


 }
