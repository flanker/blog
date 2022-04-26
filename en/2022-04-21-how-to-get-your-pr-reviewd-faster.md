# How to get your PR reviewed faster

[![fast](../images/20220421/glen-wheeler-gN3oQVVJDYo-unsplash_preview.jpeg)](../images/20220421/glen-wheeler-gN3oQVJDYo-unsplash.jpeg)

The role of Pull Request and Code Review in the engineering team is well understood. Getting PRs reviewed more quickly can improve team efficiency and reduce feedback cycles time.

Here are a few ways to get your PRs reviewed faster.

## 1. Message with context

Most teams use chat tools (e.g. Slack) to communicate. Sometimes you need to message a colleague for a review of your PR.

```
Please review https://hostname/project/pr/123 @someone
```

However, such a message is not as good as the following.

```
Support payment via stripe (Refactor and reuse the code for payment via Paypal)
Please review https://hostname/project/pr/123 @someone
```

A message with more context will let others have a quick view of what the PR is solving and how it is implemented.

## 2. Refine your PR/git commit message

In the PR, write why you make the change, why you make the technical decision, what you're not sure about, and what you'd like others to give you a solution.

I don't want to see a PR like this:

```
Merge pull request #123 from origin/dev_20220422
```

The following PR would be better:

```
#123 Support payment via Stripe

1. Extracted the common code from the payment gateway via Paypal
2. Reuse the code for payment via Stripe
3. Add a restful API interface for payment via Stripe
```

And it is not recommended to write too much description in the PR. If the information is so important, a more appropriate place would be the Git commit message. Git commit messages are always saved in the codebase. (No matter what Git platform or project management tool the team uses in the future, the git commit messages stay with your codebase)

## 4. Simple PR

For a 100-lines PR, I can review the code line by line.

For a 10,000 lines PR, I can only reply `LGTM`.

[![review the code](../images/20220421/tim-gouw-1K9T5YiZ2WU-unsplash_preview.jpeg)](../images/20220421/tim-gouw-1K9T5YiZ2WU-unsplash.jpeg)

Don't include too many things in one single PR. When implementing a new feature, you might do 1) fixing a bug; 2) refactoring the code; 3) formatting a file.

All these side works can be split into individual PRs.

(You may think that too many PRs are less efficient. There is a way to solve that called Ship/Show/Ask. Formatting code does not necessarily require a human to review. It only needs a CI check.)

## 4. Splitting into smaller git commits

Sometimes it's hard to split into multiple PRs. In this case, split into as many git commits as possible.

A feature may have several small tasks, each of which will have business model changes, presentation layer changes and unit tests. Usually, they are in different places.

[![all in one commit vs split commits](../images/20220421/all-in-one-vs-split-commits_preview.png)](../images/20220421/all-in-one-vs-split-commits.png)

If you put all of them in one commit, PR reviewers will have a lot of context switching when they read the diff.

Instead, if you put the relevant changes and tests into one commit, you can view the code separately, which is much clearer.

## 5. Attaching tests

Some developers skip the test code when they review a PR. They think that the quality of the test code will not affect the online product.

I read the test first when I review the code. Because tests are the description and the behaviors of the code. It is like reading the documentation first.

If a PR comes with good test cases, it helps a lot for me to understand.

## 6. Run CI on your branch

When reviewing a PR, the effort should not be wasted on "there is a semicolon missing" etc. These tasks should be done in the CI.

Before creating a PR, make sure the branch passes CI, including lint check and all the automated tests.

## What else you can do

1. Walk up to a colleague

[![review the code](../images/20220421/mars-IgUR1iX0mqM-unsplash_preview.jpeg)](../images/20220421/mars-IgUR1iX0mqM-unsplash.jpeg)

Although developers do not want to be disturbed at work, I still suggest that you find the right time to walk up to them. A face-to-face chat is much better than hundreds of lines of code.

2. Review other people's PR quickly

If you expect others to review your PR in quickly, you need to do it as well.

## Image

* Glen Wheeler, Unsplash
* Tim Gouw, Unsplash
* Mars, Unsplash

