(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{669:function(t,o){t.exports='# Tooltip 工具提示\n\n## 基本用法\n```jsx\nimport { Tooltip, Cell, Button } from \'zarm\';\n\nclass Demo extends React.Component {\n\n  render() {\n    return (\n      <div>\n        <Cell>\n          <div>\n            <div style={{ marginLeft: 60 }}>\n              <Tooltip direction="topLeft" title="topLeft text">\n                <Button block size="xs">TL</Button>\n              </Tooltip>\n\n              <Tooltip direction="top" title="top text">\n                <Button block size="xs">Top</Button>\n              </Tooltip>\n\n              <Tooltip direction="topRight" title="topRight text">\n                <Button block size="xs">TR</Button>\n              </Tooltip>\n            </div>\n\n            <div style={{ width: 60, float: "left" }}>\n              <Tooltip direction="leftTop" title="leftTop text">\n                <Button block size="xs">LT</Button>\n              </Tooltip>\n\n              <Tooltip direction="left" title="left text">\n                <Button block size="xs">Left</Button>\n              </Tooltip>\n\n              <Tooltip direction="leftBottom" title="leftBottom text">\n                <Button block size="xs">LB</Button>\n              </Tooltip>\n            </div>\n\n            <div style={{ width: 60, marginLeft: 60 * 4 }}>\n              <Tooltip direction="rightTop" title="rightTop text">\n                <Button block size="xs">RT</Button>\n              </Tooltip>\n\n              <Tooltip direction="right" title="right text">\n                <Button block size="xs">Right</Button>\n              </Tooltip>\n\n              <Tooltip direction="rightBottom" title="rightBottom text">\n                <Button block size="xs">RB</Button>\n              </Tooltip>\n            </div>\n\n            <div style={{ marginLeft: 60, clear: \'both\' }}>\n              <Tooltip direction="bottomLeft" title="bottomLeft text">\n                <Button block size="xs">BL</Button>\n              </Tooltip>\n\n              <Tooltip direction="bottom" title="bottom text">\n                <Button block size="xs">Bottom</Button>\n              </Tooltip>\n\n              <Tooltip direction="bottomRight" title="bottomRight">\n                <Button block size="xs">BR</Button>\n              </Tooltip>\n            </div>\n\n          </div>\n        </Cell>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n### API\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | 是否显示 |\n| title | ReactNode | - | 显示内容 |\n| direction | string | \'top\' | 显示方向，可选值 `topLeft`、`top`、`topRight`、`rightTop`、`right`、`rightBottom`、`bottomLeft`、`bottom`、`bottomRight`、`leftTop`、`left`、`leftBottom` |\n| trigger | string | \'click\' | 触发方式，PC端默认值为\'hover\' |\n| onVisibleChange | (visible?: boolean) => void | noop | 显示/隐藏触发的事件 |\n'}}]);