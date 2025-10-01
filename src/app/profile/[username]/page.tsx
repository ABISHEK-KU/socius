import { getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing } from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

interface UserName {
  params: { username: string };
}

export async function generateMetadata({ params }: UserName) {
  const user = await getProfileByUsername(params.username);
  if (!user) {
    return;
  }

  return {
    title: `Profile |${user.name ?? params.username}`,
    description: user.bio || `Check out ${params.username}'s profile.`,
  };
}
export default async function ProfilePageServer({ params }: UserName) {
 const user = await getProfileByUsername(params.username);
 if (!user) {
  notFound();
 }
 const [posts,likedPosts,isCurrentUserFollowing]=await Promise.all([
  getUserPosts(user.id),
  getUserLikedPosts(user.id),
  isFollowing(user.id)
 ])
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <ProfilePageClient user={user} posts={posts} likedPosts={likedPosts} isFollowing={isCurrentUserFollowing}/>;
}
