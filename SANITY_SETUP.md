# 🚀 Sanity CMS Kurulum Rehberi

Bu rehber, blog yazılarınızı yönetmek için Sanity CMS'i nasıl kuracağınızı açıklar.

## 📋 Gereksinimler

- Node.js 18+ 
- npm veya yarn
- Sanity hesabı (ücretsiz)

## 🛠️ Adım 1: Sanity Hesabı Oluşturun

1. [sanity.io](https://sanity.io) adresine gidin
2. "Get started for free" butonuna tıklayın
3. GitHub veya Google ile giriş yapın
4. Yeni bir proje oluşturun

## 🛠️ Adım 2: Sanity Studio Kurulumu

### Yöntem 1: Sanity CLI ile (Önerilen)

```bash
# Sanity CLI'yi global olarak kurun
npm install -g @sanity/cli

# Yeni bir Sanity projesi oluşturun
sanity init

# Sorulara şu şekilde cevap verin:
# - Project name: derya-portfolio-blog
# - Use the default dataset configuration? Yes
# - Project output path: sanity-studio
# - Select project template: Clean project with no predefined schemas
```

### Yöntem 2: Manuel Kurulum

```bash
# Proje klasörünüzde yeni bir dizin oluşturun
mkdir sanity-studio
cd sanity-studio

# Sanity projesi başlatın
npx create-sanity@latest --template clean --create-project "derya-portfolio-blog"

# Sanity Studio'yu başlatın
npm run dev
```

## 🛠️ Adım 3: Blog Schema Oluşturun

`sanity-studio/schemas/post.ts` dosyasını oluşturun:

```typescript
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
```

`sanity-studio/schemas/author.ts` dosyasını oluşturun:

```typescript
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
```

`sanity-studio/schemas/blockContent.ts` dosyasını oluşturun:

```typescript
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Number', value: 'number'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
```

## 🛠️ Adım 4: Schema'ları Kaydedin

`sanity-studio/schemas/index.ts` dosyasını güncelleyin:

```typescript
import author from './author'
import blockContent from './blockContent'
import post from './post'

export const schemaTypes = [post, author, blockContent]
```

## 🛠️ Adım 5: Environment Variables

`.env.local` dosyanızı oluşturun:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

## 🛠️ Adım 6: Sanity Studio'yu Başlatın

```bash
cd sanity-studio
npm run dev
```

Studio http://localhost:3333 adresinde açılacak.

## 🛠️ Adım 7: İlk Blog Yazısını Oluşturun

1. Sanity Studio'da "Post" sekmesine gidin
2. "Create new document" butonuna tıklayın
3. Blog yazınızı yazın:
   - **Title**: Blog yazısının başlığı
   - **Slug**: URL'de görünecek kısım (otomatik oluşturulur)
   - **Main Image**: Kapak fotoğrafı (opsiyonel)
   - **Published At**: Yayın tarihi
   - **Excerpt**: Kısa özet
   - **Body**: Ana içerik

## 🛠️ Adım 8: API Token Oluşturun

1. [sanity.io/manage](https://sanity.io/manage) adresine gidin
2. Projenizi seçin
3. "API" sekmesine gidin
4. "Tokens" bölümünde "Add API token" butonuna tıklayın
5. Token'a bir isim verin (örn: "Portfolio Blog")
6. "Editor" izinlerini seçin
7. Token'ı kopyalayın ve `.env.local` dosyanıza ekleyin

## 🛠️ Adım 9: Test Edin

```bash
# Ana projenizi başlatın
npm run dev
```

Blog sayfanızda artık Sanity'den gelen veriler görünecek!

## 📝 Kullanım

### Blog Yazısı Ekleme
1. Sanity Studio'yu açın (http://localhost:3333)
2. "Post" sekmesine gidin
3. "Create new document" butonuna tıklayın
4. Blog yazınızı yazın ve kaydedin
5. Ana sitenizde otomatik olarak görünecek

### Blog Yazısı Düzenleme
1. Sanity Studio'da mevcut yazıyı açın
2. Değişiklikleri yapın
3. Kaydedin
4. Ana sitenizde otomatik olarak güncellenecek

## 🔧 Sorun Giderme

### "Project ID not found" Hatası
- Sanity projenizin ID'sini doğru girdiğinizden emin olun
- [sanity.io/manage](https://sanity.io/manage) adresinden proje ID'sini kontrol edin

### "API Token invalid" Hatası
- API token'ınızı doğru girdiğinizden emin olun
- Token'ın "Editor" izinlerine sahip olduğundan emin olun

### "Dataset not found" Hatası
- Dataset adını "production" olarak ayarladığınızdan emin olun
- Sanity Studio'da dataset'in mevcut olduğunu kontrol edin

## 🎉 Tebrikler!

Artık blog yazılarınızı deployment yapmadan yönetebilirsiniz! Sanity Studio'da yazdığınız her blog yazısı otomatik olarak portföyünüzde görünecek. 