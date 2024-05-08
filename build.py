# coding: utf-8

import json
import os
from datetime import datetime

def info(log):
    print(f"[Info] {datetime.now().strftime('[%Y-%m-%d %H:%M:%S]')} " + log)

def warn(log):
    print(f"[Warning] {datetime.now().strftime('[%Y-%m-%d %H:%M:%S]')} " + log)

def err(log):
    print(f"[Error] {datetime.now().strftime('[%Y-%m-%d %H:%M:%S]')} " + log)


def merge_sentences():
    """
    合并所有分类的句子到一个 JSON 文件中。
    """
    info("reading categories")
    # 读取 categories.json 文件
    with open("categories.json", "r", encoding="utf-8") as f:
        categories = json.load(f)
    
    info(f"read category ok: {categories}")

    all_sentences = []
    all_id = 1  # 用于自动编号

    # 遍历每个分类
    for category in categories:
        info(f"category now: {category}")
        # 获取分类的相对路径
        file_path = category["path"]
        
        info(f"opening category: {file_path}")
        # 读取分类对应的 JSON 文件
        with open(file_path, "r", encoding="utf-8") as f:
            sentences = json.load(f)

        # 为每个句子添加自动编号
        for sentence in sentences:
            sentence["all_id"] = all_id
            all_id += 1
            all_sentences.append(sentence)

    # 将所有句子写入 sentences_all.json 文件
    info(f"writing sentences")
    with open("sentences_all.json", "w", encoding="utf-8") as f:
        json.dump(all_sentences, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    info("Main detected")
    merge_sentences()
else:
    info("Not main, exit.")