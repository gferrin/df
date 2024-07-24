export function filterPostsByMenuId(posts: any[], menuId: string) :any {
    return posts.filter(p => 
        p.frontmatter.menuId === menuId
    );
}
