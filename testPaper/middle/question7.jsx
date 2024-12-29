/* eslint-disable no-unused-vars */

// 問題7:**人の名前のチェックリストを作ろう**
//    このコンポーネントにはuserNamesというユーザーの名前(文字列)の要素をもつ配列が渡ってきます。
//    このコンポーネントは以下の条件を満たしてください。
// 1. 親のタグはulタグにしましょう
// 2. userNames全員分を問6のコンポーネントを使って表示してください。
// 3. もしuserNamesの要素の中に"自分"という文字列が渡ってきたら表示しないようにしましょう。
// 4. keyにはindexをつけましょう。

/**
 * @param {{userNames:string[]}} props
 * @returns {ReactNode}
 */
import User from "./question6";

const TestComponent2 = ({ userNames }) => {
  const filteredNames = userNames.filter((userName) => userName !== "自分");

  return (
    <ul>
      {filteredNames.map((userName, index) => (
        <User userName={userName} key={index} />
      ))}
    </ul>
  );
};

export default TestComponent2;
