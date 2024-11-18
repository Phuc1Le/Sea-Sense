import { ImageSourcePropType } from "react-native";


export interface PracticeData {
  img?: string;
  ques: string;
  ans: string[];
}

export const practiceData: { [key: string]: PracticeData[] } = {
  easy: [
    {
      img: "https://i.pinimg.com/736x/d5/82/7f/d5827fc9dd93ecba7d2b6f950d403cc0.jpg",
      ques:"Question 1: Which group of animals Green sea turtle are: ",
      ans:['R','E','P','T','I','L','E'],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtHNCec71TRYXTPrFzv5zysbj6GVHzwcJqQ&s",
      ques:"Question 2: Which is the biggest FISH in the world?: ",
      ans:['W','H','A','L','E','S','H','A','R','K'],
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_960_720.jpg",
      ques:"Question 3: Which sea creature has a very long tusk (răng nanh dài)?: ",
      ans:['N','A','R','W','H','A','L'],
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_960_720.jpg",
      ques:"Question 4: Which reptile animal lay eggs on the sand?: ",
      ans:['T','U','R','T','L','E'],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTek8xT8u2XkD8SKB81_4yE5ERxD-EVf5OuAA&s",
      ques:"Question 5: Which animal is this?: ",
      ans:['B','L','U','E','T','A','N','G'],
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5722/5722697.png",
      ques:"Question 6: Which sea creature can emit light (phát ra ánh sáng)?: ",
      ans:['A','N','G','L','E','R','F','I','S','H'],
    },
  ],
  medium: [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrmuId1nTE2lrE2toH-gRrs7k0iK2GRvwlQ&s",
      ques:"Question 1: Which marine animal is known for its intelligence (trí thông minh) and use of tools?: ",
      ans:['D','O','L','P','H','I','N'],
    },
    {
      img: "https://as1.ftcdn.net/v2/jpg/02/35/82/84/1000_F_235828441_rrMY117aoxR2BZrwbZpMTdP7GMCi4wyl.jpg",
      ques:"Question 2: Which marine animal is known for its regenerative abilities (khả năng hồi phục)?: ",
      ans:['S','T','A','R','F','I','S','H'],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgm0eRgqJ8f0PufhGwLRsIVbFkFU0WQi7LQ&s",
      ques:"Question 3: Which marine animal can change color (thay đổi màu sắc) to blend in with its surroundings?: ",
      ans:['O','C','T','U','P','U','S'],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXsae1HFBghn4yebUWdjALJcM25KeeKnLTg&s",
      ques:"Question 4: What is the largest species of sea turtle? ",
      ans:['L','E','A','T','H','E','R','B','A','C','K'],
    },
    {
      img: "https://www.shutterstock.com/image-vector/set-three-red-hearts-different-260nw-1019170240.jpg",
      ques:"Question 5: Which marine animal has eight arms and three hearts (3 trái tin)?:",
      ans:['O','C','T','O','P','U','S'],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNiRLJi-3-5vfIUiALfofVYOR676pAqMVqw&s",
      ques:"Question 6: Which marine animal has a body composed of 95% water (95% cơ thể là nước)?: ",
      ans:['J','E','L','L','Y','F','I','S','H'],
    },
  ],
  hard: [
    {
      img: "https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_960_720.jpg",
      ques:"Question 1: Which sea animal can absorb oxygen through their skin (hấp thụ khí oxy qua da) under water?: ",
      ans:['S','E','A','S','N','A','K','E'],
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_960_720.jpg",
      ques:"Question 2: Which mammal, besides from whale and dolphin, can sleep under water (ngủ dưới nước)?: ",
      ans:['S','E','A','L'],
    },
    {
      img: "https://media.istockphoto.com/id/1342104540/vector/set-of-eye-ball-icon-with-different-angle-pupil-icon.jpg?s=612x612&w=0&k=20&c=aLhKdZRCpluzyz074G14prokFGuzJIbqzFh-EwqZVOI=",
      ques:"Question 3: Which sea creature has hundreds of tiny eyes around them?: ",
      ans:['S','C','A','L','L','O','P'],
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_960_720.jpg",
      ques:"Question 4: Which marine animal is known for having a symbiotic relationship with sea anemones (mối quan hệ cộng sinh với hải quỳ)?: ",
      ans:['S','E','A','H','O','R','S','E'],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdx0blK0RHPc3tcF4wfmuLzwola-n0rCrlA&s",
      ques:"Question 5: Which sea animal has venomous spine (vây lưng độc)?: ",
      ans:['L','I','O','N','F','I','S','H'],
    },
  ],
};
