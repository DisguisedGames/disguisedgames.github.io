/*
    module.exports = {
    images: {
        loader: 'cloudinary',
        path: '',
        domains: [
          'res.cloudinary.com'
        ],
    },
}
*/

module.exports = {
    basePath: '',
    assetPrefix: '',
    images: {
      loader: 'cloudinary',
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      path: 'https://res.cloudinary.com/disguised/image/upload/',
    },
    };