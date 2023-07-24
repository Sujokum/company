/** @type {import('next').NextConfig} */
const nextConfig = {
      output : 'export',
      assetPrefix: ".",
      images :{
            imageSizes: [100 , 300],
            deviceSizes: [750, 1080],
            formats: ['image/webp']
      },
      transpilePackages: ["next-image-export-optimizer"] ,
      env: {
            nextImageExportOptimizer_imageFolderPath: "public/images",
            nextImageExportOptimizer_exportFolderPath: "out",
            nextImageExportOptimizer_quality: 75,
            nextImageExportOptimizer_storePicturesInWEBP: true,
            nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
            nextImageExportOptimizer_generateAndUseBlurImages: true,
          },
}

module.exports = nextConfig
