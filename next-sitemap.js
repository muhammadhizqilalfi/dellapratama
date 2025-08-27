/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.dellapratama.com', // ganti dengan domainmu
  generateRobotsTxt: true, // otomatis buat robots.txt
  sitemapSize: 5000, // jumlah maksimal URL per sitemap
  changefreq: 'daily', // frekuensi update halaman
  priority: 0.7, // prioritas default halaman
  exclude: ['/secret-page'], // halaman yang ingin di-exclude
};
