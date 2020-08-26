1. The original [News_Category_Dataset_v2](https://www.kaggle.com/rmisra/news-category-dataset) is a json file from kaggle.
1. The article citing this data set is [here](https://towardsdatascience.com/text-classification-with-nlp-tf-idf-vs-word2vec-vs-bert-41ff868d1794)
1. The size (after extracted) of it is 84M bytes, which is not allowed to upload to github, so I use bash command to split it into several files, each is less than 20M. 
1. The command is [as follows](https://stackoverflow.com/questions/2016894/how-to-split-a-large-text-file-into-smaller-files-with-equal-number-of-lines):
<pre>
split -l 200000 filename
which will create files each with 200000 lines named xaa xab xac ...
split -C 20m --numeric-suffixes News_Category_Dataset_v2.json data
creates files like data01 data02 data03 ... each of max size 20 megabytes.
</pre>
1. To merge them into a large file (you can refer to [here](https://unix.stackexchange.com/questions/24630/whats-the-best-way-to-join-files-again-after-splitting-them)):
<pre>
cat data0{0..4} > all.json
</pre>
(You can use this method on your colab)
