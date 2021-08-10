/**
 * 规则：
 1. 基本数据类型：
     undefined 转换之后仍是 undefined(类型也是 undefined)
     boolean 值转换之后是字符串 "false"/"true"
     number 类型(除了 NaN 和 Infinity)转换之后是字符串类型的数值
     symbol 转换之后是 undefined
     null 转换之后是字符串 "null"
     string 转换之后仍是string
     NaN 和 Infinity 转换之后是字符串 "null"

 2. 函数类型：转换之后是 undefined

 3. 如果是对象类型(非函数)
     如果是一个数组：如果属性值中出现了 undefined、任意的函数以及 symbol，转换成字符串 "null" ；
     如果是 RegExp 对象：返回 {} (类型是 string)；
     如果是 Date 对象，返回 Date 的 toJSON 字符串值；
     如果是普通对象；
         如果有 toJSON() 方法，那么序列化 toJSON() 的返回值。
         如果属性值中出现了 undefined、任意的函数以及 symbol 值，忽略。
         所有以 symbol 为属性键的属性都会被完全忽略掉。

 4. 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
 */
