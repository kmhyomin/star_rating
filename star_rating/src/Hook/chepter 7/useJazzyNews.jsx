import { useState, useEffect, useMemo, useLayoutEffect } from 'react';

// 외부 알림음 및 뉴스 서비스 (가상의 객체들)
// import { newPostChime, welcomeChime, goodbyeChime, newsFeed } from './services';

export const useJazzyNews = () => {
  const [_posts, setPosts] = useState([]);

  // 1. 새로운 포스트를 추가하는 함수 (함수형 업데이트 사용)
  const addPost = (post) => setPosts((allPosts) => [post, ...allPosts]);

  // 2. posts 변수를 메모이제이션 (참조 무결성 유지)
  const posts = useMemo(() => _posts, [_posts]);
  // const posts = _post 대신 복잡한걸 하는 이유
  // 

  // 3. 뉴스 목록(posts)이 바뀔 때마다 알림음 재생
  useEffect(() => {
    newPostChime.play();
  }, [posts]);

  // 4. 컴포넌트 마운트 시 뉴스 피드 구독, 언마운트 시 해제
  useEffect(() => {
    newsFeed.subscribe(addPost);
    return () => newsFeed.unsubscribe(addPost);
  }, []);

  // 5. 처음 등장할 때와 사라질 때 환영/작별 소리 재생
  useEffect(() => {
    welcomeChime.play();
    return () => goodbyeChime.play();
  }, []);

  useLayoutEffect();

  // 외부에서 뉴스 목록을 사용할 수 있도록 반환
  return posts;
};
