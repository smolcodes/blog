---
title: The Monty Hall Problem in Java
description: Explanation of the Monty Hall problem
date: 2017-11-28
tags:
  ['java', 'Monty Hall']
layout: layouts/post.html
---

The Monty Hall problem is a classic logic problem that's not really like the game that it's based on

```
import java.util.Random; //a utility that lets you generate random integers
public class MontyHall {

 public static void main(String[] args) {
  int switchWins=0;// 0 wins for sticking to the same door
  int stayWins=0; //0 wins for staying w the same door
  
  Random gen=new Random(); //generates random integer
  //use random bc ur producing whole positive numbers
  //use math.random for producing numbers w decimals
  
  for(int plays=0;plays<2000;plays++){ //games from 0 to 2000 where ++ means 
   //ur adding 1 until you get to 2000
   int [] doors={0,0,0}; //a simple matrix 1x3 
   //0 is goat 1 is car
   doors[gen.nextInt(3)]=1;
   int choice=gen.nextInt(3);
   int shown;
   do{
    shown=gen.nextInt(3);
   }
   while(doors[shown]==1||shown==choice);
            stayWins +=doors[choice]; //staying in the same door
            switchWins += doors[3-choice-shown];
  }
System.out.println("Switch wins " + switchWins + " times");
System.out.println("Stay wins " + stayWins + " times");
 }
}
```