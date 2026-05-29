# Srinivas IFS Blog API v2 Documentation

Base URL:

`https://www.srinivasifs.com/_functions`

## Available Blog Fields

From Wix Blog/Posts:

- _id
- internalId
- uuid
- title
- slug
- postPageUrl
- excerpt
- plainContent
- richContent
- coverImage
- coverImageDisplayed
- author
- publishedDate
- lastPublishedDate
- timeToRead
- viewCount
- likeCount
- commentCount
- featured
- pinned
- language
- categories
- mainCategory
- tags
- hashtags
- relatedPosts
- translationId

---

# GET /posts

Unified listing endpoint with filtering, sorting, pagination and search.

Example:

`/posts?page=1&limit=6`

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| page | number | Page number (default 1) |
| limit | number | Records per page (default 6) |
| search | string | Search title and content |
| category | string | Category ID |
| featured | boolean | true/false |
| pinned | boolean | true/false |
| language | string | en, kn, etc |
| author | string | Author ID |
| tag | string | Tag value |
| hashtag | string | Hashtag |
| sort | string | newest, oldest, popular, liked, commented, readtime |
| fromDate | ISO date | Published date >= |
| toDate | ISO date | Published date <= |

### Sort Values

- newest => publishedDate DESC
- oldest => publishedDate ASC
- popular => viewCount DESC
- liked => likeCount DESC
- commented => commentCount DESC
- readtime => timeToRead DESC

### Response

```json
{
  "status":"success",
  "page":1,
  "limit":6,
  "totalItems":120,
  "totalPages":20,
  "hasNext":true,
  "hasPrev":false,
  "posts":[]
}
```

---

# GET /post

Single post by slug.

### Query Parameters

| Parameter | Required |
|-----------|----------|
| slug | Yes |

Example:

`/post?slug=srinivasulu-indian-forest-service-ifs-to-the-tedxabbs-stage`

### Response Fields

Returns all available post fields:

- id
- internalId
- uuid
- title
- slug
- postPageUrl
- excerpt
- plainContent
- richContent
- coverImage
- coverImageDisplayed
- author
- publishedDate
- lastPublishedDate
- timeToRead
- viewCount
- likeCount
- commentCount
- featured
- pinned
- language
- categories
- mainCategory
- tags
- hashtags
- relatedPosts

---

# GET /recentPosts

Latest published posts.

### Query Parameters

| Parameter | Default |
|-----------|---------|
| limit | 3 |

Examples:

`/recentPosts`

`/recentPosts?limit=6`

---

# GET /randomPosts

Random post selection.

### Query Parameters

| Parameter | Default |
|-----------|---------|
| limit | 3 |

Example:

`/randomPosts?limit=3`

---

# GET /categories

Returns unique categories used in posts.

Response:

```json
{
  "categories":[
    {
      "id":"6894a872361afb873d30f5d9",
      "name":"TEDx"
    }
  ]
}
```

---

# GET /stats

Site-wide statistics.

Response:

```json
{
  "totalPosts":120,
  "totalViews":25000,
  "totalLikes":900,
  "totalComments":120
}
```

---

# Recommended Frontend Usage

Homepage:
- /recentPosts?limit=6
- /randomPosts?limit=3

Blog Listing:
- /posts?page=1&limit=6

Category Page:
- /posts?category=CATEGORY_ID&page=1&limit=6

Search:
- /posts?search=forest

Popular Articles:
- /posts?sort=popular&limit=10

Most Liked:
- /posts?sort=liked&limit=10

Single Article:
- /post?slug=ARTICLE_SLUG

Archive By Date:
- /posts?fromDate=2025-01-01&toDate=2025-12-31

Language Filter:
- /posts?language=en

Featured Posts:
- /posts?featured=true

Pinned Posts:
- /posts?pinned=true
