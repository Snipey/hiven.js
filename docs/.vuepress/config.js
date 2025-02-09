module.exports = {
  title: "Tailwind",
  description: "Just playing around",
  extend: '@vuepress/theme-default',
  themeConfig: {
    nav: [{ text: "Home", link: "/" }]
  },
  markdown: {
    /**
     * Add class named to html generated by Markdown
     */
    extendMarkdown: md => {
      /**
       * Use Highlight JS for Markdown code blocks
       */
      md.use(require("markdown-it-highlightjs"), {});
    },
    anchor: { permalink: false }
  }
}
