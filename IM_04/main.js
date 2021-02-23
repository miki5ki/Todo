window.onload = () =>{
  const key = "waiting-task"
  const text = localStorage.getItem(key)
  createWaitingList(text);
}

const onClickAdd = () => {
  //テキストボックスの値を取得する
  const input = document.getElementById("add-text")
  const inputText = input.value;
  //値をクリアする
  input.value = "";
  localStorage.setItem("waiting-task",inputText);
  createWaitingList(inputText);

};

//完了ボタンをクリックしたら未着手から削除し、完了のtodoを追加する関数を実行
const deleteFromDoneList = (target) => {
  document.getElementById("waiting-list").removeChild(target);
}

//未完了リストに追加する
const createWaitingList = (text) => {
    
    //divタグの生成
    const div = document.createElement("div");
    div.className = "list-contents"
  
    //liタグの生成
    const li = document.createElement("li");
  
    //liタグに値を入れる
    li.textContent = text;
  
    
    //ul子要素にdivを設定
    const waitingList = document.getElementById("waiting-list").appendChild(div);
    
    //ボタンの生成
    const doneButton = document.createElement("button");
    doneButton.textContent = "完了";
    
    doneButton.addEventListener("click", () =>{
      deleteFromDoneList(doneButton.parentNode);
      const addTarget = doneButton.parentNode;
      const doneText = addTarget.firstElementChild.textContent;
      //完了のtodoを追加 
  
      addTarget.textContent = null;
      const li = document.createElement("li");
      li.textContent = doneText;
      const backButton = document.createElement("button");
      backButton.textContent = "戻す"
    


      backButton.addEventListener("click", () => {
        const backTarget = backButton.parentNode;
        document.getElementById("done-list").removeChild(backTarget);
        const backText = backTarget.firstChild.textContent;
        createWaitingList(text);
        
      });
  
  
      addTarget.appendChild(li);
      addTarget.appendChild(backButton);
      document.getElementById("done-list").appendChild(addTarget);  
    })
  
  
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", () => {
      deleteFromDoneList(deleteButton.parentNode);
    });
    
    //div子要素にliを設定
    div.appendChild(li);
    div.appendChild(doneButton);
    div.appendChild(deleteButton);
    
    document.getElementById("waiting-list").appendChild(div);



}


//追加ボタンをクリックしたら未着手にtodoを追加する関数の実行
document.getElementById("add-btn").addEventListener("click", () => onClickAdd());


