---
title: Working with JGame.
layout: post
comments: true
---
##Premise

This semester I am taking a course, Software Design and Implementation, that requires probably the most coding out of any class offered here. For the very first project, we had to make a game using the JGame engine. 

At first, I really did not enjoy JGame. I thought it was really convoluted and did not really have much function. On top of that, there was virtually no outside documentation to be found online, so for a less experienced programmer, it was really hard to find anything helpful. 

However, the tutorials found in the JGame documentation were incredibly helpful, and essentially provided all of the functionality required to create a fairly robust game. 

##Change

Now, I think my mind changed a little about the engine when I was browsing through some code samples trying to get a better feel for JGame. To facilitate interactions, JGame uses a collision based system, where various objects could collide with each other and the background. To determine when to call these interactions, the user assigns a collision id to each new object, which is used to keep track of the collisions. Several of the other students in class expressed a lot of difficulties with using the collision ids. While I didn't see any problems in my own game, I thought it kind of strange that so many people would be experiencing problems with a seemingly simple method. 

When looking at other games that used JGame, I noticed that some of them used collision id's in a fairly specific way: powers of 2. This made me realize that JGame actually uses bit functions when processing collisions, and it did so in an incredibly efficient way. For example:

Note: JGame uses a tile system to determine where objects are placed around the play area. 

I had a ninja character that walked around platforms. To detect if there was a platform underneath the character, I generated a collision id for the tiles under the character as follows: 

{% raw %}
	private int determineCid(JGRectangle ts, JGRectangle cts, int cid) {
		for (int tdx=0; tdx<ts.width; tdx++) {
			cid |= getTileCid(ts.x+tdx, cts.y+2);
		}
		return cid;
	}
{% endraw %}

Because the character took up multiple tiles in the game, I looped through each tile contained by the character, and got the collision id of the tile two tiles under the character. If there was a platform tile, the collision id was 2, or 10 in binary. If there was any tile under the character, the cid would return as 2. 

Later I call:

{% raw %}
	if ((cid&3)==0) { 
		fallDown();
{% endraw %}

So 3 in binary is 11, and represents a mask. There are a couple cases for this. The cid variable can be 0, 1, 2 or 3. 

Case 1: cid = 0
{% raw %}
		00
	&	11
	=	00	
{% endraw %}
This means that there were no tiles under the character to support it and it would fall. 

Case 2: cid = 1
{% raw %}
		01
	&	11
	=	01	
{% endraw %}
This means that there was another character (with collision id of 1) underneath the character, so it would not be able to fall, as there is another character in the way. 

Case 3: cid = 2
{% raw %}
		10
	&	11
	=	10
{% endraw %}
This means that there was a platform tile underneath the character, so it is supported. 

Case 4: cid = 3
{% raw %}
		11
	&	11
	=	11
{% endraw %}
This means that there was both a platform tile and a character underneath the character, so it would not fall. 

As you can see, using the bit mask and well thoughtout collision ids could make determining collision interactions much more efficient. Rather than several if statements, checking all of the cases, we only required one. While there is still a lot to learn about JGame, bit functions, and Java in general, this project definitely taught me a lot about Java and software design. 

Unfortunately, since the project was made for class, the code for it is currently not public. I will talk to my professor about making it available, but for now just enjoy this cool JGame feature! 
