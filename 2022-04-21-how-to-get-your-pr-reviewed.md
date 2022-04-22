# 如何让你的 PR 更快的被 review

[![fast](images/20220421/glen-wheeler-gN3oQVVJDYo-unsplash_preview.jpeg)](images/20220421/glen-wheeler-gN3oQVVJDYo-unsplash.jpeg)

Pull Request 代码评审在研发团队的作用大家都明白。让 PR 更快的 Review 通过，可以提升团队效率、降低反馈周期。

以下几个方法可以让 PR 更快的被 review：

## 1. 在消息中带着上下文

团队会使用聊天工具（如 Slack、企业微信）来交流。我们会给同事留言，请求 review 你的 PR。

```
求 review https://hostname/project/pr/123 @张三
```

但是，这样一条消息，显然不如下面的：

```
支持通过钉钉账号登录系统（复用了企业微信登录的功能，并作了重构）
求 review https://hostname/project/pr/123 @张三
```

在消息中附加更多的上下文，可以让对方更快知道这个 PR 是解决什么问题，以及怎么实现的。

## 2. 在 PR/git commit 中添加说明

在 PR 中附带一些说明，为什么这样子修改，为何作出如此的技术决策，哪些地方你没有把握，希望对方给出什么意见。

如果打开 PR 我可不想看到标题是：

```
Merge pull request #123 from origin/dev_20220422
```

下面这个 PR 会更好：

```
#123 支持通过钉钉登录系统

1. 将企业微信登录中的 oauth 部分抽取为独立模块
2. 增加了钉钉登录的接口和配置
```

同时，不建议在 PR 的 message 写过多的说明。如果这些信息很重要，更合适的地方应该是在 git commit message 里。git commit message 是永远会保存在代码库里的。（不论团队以后如何切换什么Git 平台、项目管理工具，git commit 是不会变的）

## 4. 更简单的 PR

这个大家都明白。100 行的 PR，我可以认真的 review 代码。

10000 行的 PR，我只能默默的回复 LGTM 了。

[![review the code](images/20220421/tim-gouw-1K9T5YiZ2WU-unsplash_preview.jpeg)](images/20220421/tim-gouw-1K9T5YiZ2WU-unsplash.jpeg)

不要把所有东西放在一个 PR。在完成一个任务时，可能会顺手：1）修复了一个 bug；2）重构了一段代码；3）整理了一个文件；

那么建议可以拆分成多个 PR。

（你可能会担心，多个 PR 是不是会降低效率，那么你可以参考 Ship/Show/Ask 的 PR 方式，例如 format 代码这种修改，不一定需要人工来 review。）

## 4. 分割成小的 git commit

有时候很难拆分成多个 PR 的，那也尽可能的拆分成多个 git commit

一个完整的任务，可能会有 A、B、C 几个小的功能构成，每一个功能都会有业务逻辑层、控制器层、展示层、单元测试等等不同的地方。

[![all in one commit vs split commits](images/20220421/all-in-one-vs-split-commits_preview.png)](images/20220421/all-in-one-vs-split-commits.png)

如果全部放在一个 commit 中，review 代码时，会遇到很多上下文切换。

反之，将相关的修改和测试放入一个 commit，review 代码时可以分开查看，更加清晰。

## 5. 附加上测试

有些同学 review 代码不看测试代码，认为测试代码的质量不会影响线上运行的产品。

相反，我 review 代码是先看测试的。因为测试就是在表达这段代码期望运行的结果，也是代码的文档。

如果一个 PR 附带的用例写的很棒，会极大的提升我对 PR 的理解。

## 6. 提前在分支上通过 CI

PR review 时，人力不应该浪费在「这里少了个分号」、「这里代码没有对齐」。这些工作应该交给 CI 来做。

提交你的 PR 前，确保分支是通过 CI 的，包括静态代码检查、自动化测试等。

## 除此之外还可以做的：

1. 走到同事的身旁

[![review the code](images/20220421/mars-IgUR1iX0mqM-unsplash_preview.jpeg)](images/20220421/mars-IgUR1iX0mqM-unsplash.jpeg)

虽然开发不希望工作被打扰，但我还是建议你找个恰当的时间，走到对方面前。面对面沟通，效率会比整个屏幕洋洋洒洒的几百行代码高很多。

2. 及时的 review 别人的 PR

如果你期望别人可以及时 review 你的 PR，那你自己也要做到。

## 图片

* Glen Wheeler, unsplash
* Tim Gouw, unsplash
* Mars, unsplash
