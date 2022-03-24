---
layout: home
title: 1. Two Sum
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

**Example 1**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2**
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```
**Example 3**
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints:**

-   -2 <= nums.length <= 10^4
-   -109 <= nums[i] <= 10^9
-   -109 <= target <= 10^9
-   **Only one valid answer exists**.

**Follow-up:** Can you come up with an algorithm that is less than O(n2) time complexity?

**[JavaScript (ES6)] Syntax Tips**

{% highlight javascript linenos=table %}
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
{% endhighlight %}

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>
