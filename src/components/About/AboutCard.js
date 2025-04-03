import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            我 的 名 字 是 <span className="purple">王 晟 梁 </span>
            ，2 4 岁。住 在 <span className="purple"> 中 国 海 洋 大 学 崂 山 区 一 带.</span>
            <br/>
            我 在 × × 科 技 公 司 实 习，每 天 最 晚 6 点 下 班 回 家。
            <br/>
            <br/>
            我 不 抽 烟 ，酒 仅 浅 尝 辄 止。 晚 上 12 点 睡 觉，保 证 睡 足 8 小 时。
            <br/>
            睡 前 喝 一 杯 冰 可 乐，然 后 做 20 分 钟 的 "舒 缓 运 动" 暖 身 再 睡 觉，
            <br/>
            基 本 能 熟 睡 到 天 亮。
            <br/>
            像 婴 儿 一 样，绝 不 把 疲 劳 和 压 力 留 到 第 二 天。
            <br/>
            连 医 生 都 说 我 很 正 常。
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 喜 欢 打 游 戏
            </li>
            <li className="about-activity">
              <ImPointRight /> 喜 欢 看 动 漫
            </li>
            <li className="about-activity">
              <ImPointRight /> 喜 欢 牵 小 手
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "我 只 是 想 当 一 名 普 通 的 研 究 生 而 已 !"{" "}
          </p>
          <footer className="blockquote-footer">吉 晟 吉 梁</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
