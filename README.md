# DemoSay

作为 EVE Frontier 新手玩家，通过 "You Demo, I Say" 的独特的游戏化的方式学习官方(CCP)和游戏内 Builder 提供的各种课程包，快速了解游戏内容和各种玩法，同时在 Sui 链获得记录学习成果的NFT。

官方或者 Builder 将相应 NFT 编程进智能合约 (Smart Assemblies)，给予新手玩家通行的便利、费用的优惠等，以此奖励玩家对游戏和智能合约(Smart Assemblies)的支持。

通过提供课程包，发布方推广了项目，实现了有效的拉新，并可一定程度延长用户的留存时间，向用户提供更多的支持、产生更多的互动。

EVE Frontier 101 是 DemoSay 平台上官方(当前仅为假设)发布的一个课程包。

## 项目概况

- 名称：DemoSay
- Slogan: You Demo, I Say.
- Website: www.demosay.com

## 解决的痛点

1. 比如这次 Hacker House In Changsha，uvd 老师说，新手在来长沙前，一定要学完 Sui docs 和 MoveBook 等，但他没办法有效评估报名学员是否完成了此动作。通过在 DemoSay 上发布相应课程，就能查看该学员的预习情况和技能水平。
2. 很多项目方的技术和文档更新快，也存在很多细节错误，新手很容易放弃，哪怕不放弃，学习过程也不连续。通过游戏化的学习方式，以及有效的奖励机制，实现各个项目方的快速拉新和有效留存。
3. todo

## 实现步骤

1. 实现Web2版本
2. 实现Web3版本
3. 开放接口，融入EVE Frontier

## 长期走向

- 增加 Terminal UI 交互学习方式
- 通过 Slash Commands 接入 AI Agent 辅助学习
- 增加移动端支持

## 以 EVE Frontier 101 课程包为例

### 基本结构

- Demo: 描述一个场景，演示一个示例，内容可以文本、图片、视屏等。
- Say: 回答场景提的问题，或者补充缺失的内容。

1. Demo the product / software
2. Demo the features
3. Demo a solution
4. Demo how to [do something]
5. Demo the process
6. Demo the technique
7. Demo a song / track
8. Demo the gameplay

### 题目形式

#### 题目一

- Demo: EVE Frontier 是由谁开发和运营的？
- Say: ____

答案：CCP

#### 题目二

You Demo: Connect EVE Vault In-Game
1. Click the OPEN WALLET button
2. Open the EVE Vault by clicking on the orange button with `EVE` written on it
3. Enter a six digit PIN
4. You will then be prompted to sign in with your EVE Frontier account details
5. Next you will be asked to enter the PIN you set earlier
6. You can now see your EVE and SUI balance and use it to send and receive EVE

Please visit: ____

I Say: ____ . ____ . ____

答案：playtest.evefrontier.com

#### 题目三

You Demo：看完整个视频，找到里面嵌入的彩蛋，准确输入彩蛋显示的4位数。

I Say: ____

### 回答方式

没有选择题，必须一个字母一个字母输入进去。

### 快捷键

Commad + [: 发音读出答案

Command + ]: 文本显示答案

### 成绩系统

测试通过，积分统计。


## 用户群体

新手

## 技术栈

- 课程包存储在 walrus
- Sui NFT
- zkLogin

## 经济模型

- 方便游戏中的公会/联盟，根据需要去拉不同方向、不同层次的新手玩家。
- 官方吸引新玩家加入
- builder 推广智能合约、玩法，吸引新用户参与其建造的基础设施等

## Development

First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
