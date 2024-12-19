export interface RandomUsers {
  id: string;
  name: string;
  image: string;
}

export interface PostWithProfile {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  create_at: string;
  profile: {
    user_id: string;
    name: string;
    image: string;
  };
}

export interface Likes {
  id: string;
  user_id: string;
  post_id: string;
}

export interface Comment {
  id: string;
  user_id: string;
  post_id: string;
  text: string;
  create_at: string;
}

export interface UploadError {
  type: string;
  message: string;
}

// COMPONENT TYPES

export interface PostMainCompTypes {
  post: PostWithProfile;
}

export interface PostMainLikesCompTypes {
  post: PostWithProfile;
}

export interface ProfilePageTypes {
  params: { id: string };
}

// LAYOUT INCLUDE TYPES

export interface MenuItemsTypes {
  iconString: string;
  colorString: string;
  sizeString: string;
}

export interface MenuItemFollowCompTypes {
  user: RandomUsers;
}
