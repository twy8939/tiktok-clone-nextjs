export interface RandomUsers {
  id: string;
  name: string;
  image: string;
}

export interface CropperDimensions {
  height?: number | null;
  width?: number | null;
  left?: number | null;
  right?: number | null;
}

export interface ShowErrorObject {
  type: string;
  message: string;
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

export interface Post {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  created_at: string;
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

export interface CommentsHeaderCompTypes {
  post: PostWithProfile;
}

export interface PostMainCompTypes {
  post: PostWithProfile;
}

export interface PostMainLikesCompTypes {
  post: PostWithProfile;
}

export interface PostPageTypes {
  userId: string;
  postId: string;
  [key: string]: string;
}

export interface PostUserCompTypes {
  post: Post;
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

export interface TextInputCompTypes {
  string: string;
  inputType: string;
  placeholder: string;
  onUpdate: (newValue: string) => void;
  error: string;
}
