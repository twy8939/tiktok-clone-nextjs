export interface RandomUsers {
  id: string;
  name: string;
  image: string;
}

// COMPONENT TYPES

export interface PostMainCompTypes {
  post: PostWithProfile;
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
// LAYOUT INCLUDE TYPES

export interface MenuItemsTypes {
  iconString: string;
  colorString: string;
  sizeString: string;
}

export interface MenuItemFollowCompTypes {
  user: RandomUsers;
}
