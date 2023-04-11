import {readFile, readdir} from 'fs/promises';

export async function getPost(file) {
    const data = await readFile(`content/posts/${file}.json`, 'utf-8')
    const post = JSON.parse(data)
    return post
}

export async function getSlugs() {
    const sourcePath = await readdir("content/posts")
    const postFiles = sourcePath.filter(file => file.endsWith(".json"))
    const slugs = postFiles.map(post => post.slice(0, -5))

    return slugs
}