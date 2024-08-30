import { CommonAPI } from "./CommonAPi";
import { SERVER_URL } from "./Server_url";

//upload video
export const uploadvideoAPI = async(video)=>{
    return await CommonAPI("POST",`${SERVER_URL}/allVideos`,video)
}



//get allUploadedvideos

export const getAllUploadedVideosAPI = async()=>{
    return await CommonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

//get a video
export const getAVideoAPI = async(id)=>{
    return await CommonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}
//delete video
export const deleteVideoAPI = async(id)=>{
    return await CommonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

// addvideo history
export const addvideoHistoryAPI = async(video)=>{
    return await CommonAPI("POST",`${SERVER_URL}/history`,video)
}

//gethistory
export const getVideoHistoryAPI = async()=>{
    return await CommonAPI("GET",`${SERVER_URL}/history`,"")
}
//delete history
export const deleteHistoryAPI = async(id)=>{
    return await CommonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

//add videos category
export const addvideoCategoryAPI = async(category)=>{
    return await CommonAPI("POST",`${SERVER_URL}/category`,category)
}

//get category
export const getVideoCategoryAPI = async()=>{
    return await CommonAPI("GET",`${SERVER_URL}/category`,"")
}
//delete cate
export const deleteCategoryAPI = async(id)=>{
    return await CommonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}
//update category
export const updateCategoryAPI = async(id,categoryDetails)=>{
    return await CommonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}
