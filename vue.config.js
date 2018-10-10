module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/guestbook-vue/'
        : '/',
    outputDir: "dist"
}