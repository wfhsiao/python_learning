## python_learning
1. [markdown guide for colab](https://colab.research.google.com/notebooks/markdown_guide.ipynb?hl=en#scrollTo=5Y3CStVkLxqt)
1. [pandas user guid](https://pandas.pydata.org/pandas-docs/stable/user_guide/index.html)| [Pandas demo](https://colab.research.google.com/drive/1J07IPkq6iQQP1Uq8gUixJ6YoYJnZEkAG?hl=en#scrollTo=VmrH9fkrxgfb)
1. [week 9 twstock](https://colab.research.google.com/drive/1mKYqF6gcaJ1Du-KB6GVwGIm_xrs3TkPG?hl=en#scrollTo=DhHLExODj0hl)
1. [project idea](https://colab.research.google.com/drive/1VG55eZ0AOJdF-YpYJ4jPgoiKmz7hfqsw?hl=en#scrollTo=ODMldT0O1mj8)

* practice 7. 產生小學墊板的九九乘法表(分欄)
此題的重點在於如何產生橫向的重複, 一般迴圈的輸出為緃向. **解法:** 將內外迴圈對調! 參考以下程式碼:
<pre>
for j in range(1, 10):
  for i in range(2, 6):
    print(f'{i:>2}*{j:>2}={i*j:>2}', end='\t')
  print()
</pre>
即可得到如下輸出:
<pre>
 2* 1= 2	 3* 1= 3	 4* 1= 4	 5* 1= 5	
 2* 2= 4	 3* 2= 6	 4* 2= 8	 5* 2=10	
 2* 3= 6	 3* 3= 9	 4* 3=12	 5* 3=15	
 2* 4= 8	 3* 4=12	 4* 4=16	 5* 4=20	
 2* 5=10	 3* 5=15	 4* 5=20	 5* 5=25	
 2* 6=12	 3* 6=18	 4* 6=24	 5* 6=30	
 2* 7=14	 3* 7=21	 4* 7=28	 5* 7=35	
 2* 8=16	 3* 8=24	 4* 8=32	 5* 8=40	
 2* 9=18	 3* 9=27	 4* 9=36	 5* 9=45
</pre>
* practice 5. 寫一個能輸入國文,英文,數學三科分數的程式，將此三個分數由鍵盤讀入分別存入變數之中,在判斷是否有任何一科不及格,如果任一科不及格,則輸出該科不及格,分別顯示[科目+failed.]:如果全部都及格,則輸出全部通過,顯示[All Pass.]
** hint:
>>> chinese, english, math = (int(x) for x in eval(input('請輸入國英書成績，以逗號區隔:')))
<pre>
55, 78, 89
78, 55, 89
78, 89, 55
55, 85, 46
78, 55, 46
17, 55, 46
80, 82, 75
</pre>

* practice 6. 寫一個判斷三角形的程式：當三個邊長能夠構成三角形時，再判斷該三角形為鈍角、銳角或是直角三角形，否則請顯示【不可以構成三角形】。程式執行時，畫面顯示【請輸入三個整數：】要求輸入三邊的邊長。構成三角形存在條件：任兩邊相加大於第三邊，且皆不可為０。直角三角形：其中有兩個邊的平方和等於第三邊的平方。鈍角三角形：其中有兩個邊的平方和小於第三邊的平方。銳角三角形：任兩邊的平方和大於第三邊的平方。
