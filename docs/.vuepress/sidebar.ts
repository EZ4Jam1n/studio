import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  "",
  // Java
  {
    text: "Java",
    icon: "java",
    prefix: "java/",
    collapsable: true,
    children: [
      {
        text: "Java SE",
        prefix: "java-se/",
        icon: "java",
        collapsable: true,
        children: [
          "jdk-install-and-hello-world",
          "learn-java-with-idea",
          "variable-and-datatype",
          "operator",
          "control-process",
          "how-to-operate-array",
          "oop-1",
          "oop-2",
          "all-kinds-of-variable",
          "in-out-stream",
          "reflection",
          "annotations",
          "jdbc-introduction",
          "test-with-junit",
          "lombok-install-and-usage",
        ],
      },
      {
        text: "Java Web",
        prefix: "java-web/",
        icon: "java",
        collapsable: true,
        children:[
          "create-deploy-javaweb-with-idea",
          "js/introduction",
          "js/annotation-inout-variable",
          "js/datatype",
          "js/operator",
          "js/process-control",
          "js/array",
        ],
      },
      {
        text: "Maven",
        prefix: "maven/",
        icon: "apache",
        collapsable: true,
        children:[
          "maven-intro-install",
          "maven-command-skeleton",
          "maven-warehouse-dependency",
          "maven-project-with-idea",
        ],
      },
      {
        text: "Spring",
        prefix: "spring/",
        icon: "leaf",
        collapsable: true,
        children:[
          "spring-intro",
          "the-methods-to-create-spring-project",
        ],
      },
      {
        text: "Spring MVC",
        prefix: "spring-mvc/",
        icon: "leaf",
        collapsable: true,
        children:[
          "intro-and-quick-start",
        ],
      },
      {
        text: "MyBatis",
        prefix: "mybatis/",
        icon: "earlybirds",
        collapsable: true,
        children:[
          "introduction",
          "quick-start",
          "mybatis-generator",
        ],
      },
      {
        text: "MyBatis Plus",
        prefix: "mybatis-plus/",
        icon: "earlybirds",
        collapsable: true,
        children:[
          "intro-and-quick-start",
          "log-and-common-crud",
        ],
      },
      {
        text: "Spring Boot",
        prefix: "spring-boot/",
        icon: "spring-boot",
        collapsable: true,
        children: [
          "introduction",
          "the-methods-to-create-springboot-project",
          "configuration",
          "integrated-swagger2",
          "integrated-swagger3",
          "integrated-freemarker",
          "integrated-thymeleaf",
        ],
      },
    ],
  },
  // 数据库
  {
    text: "数据库",
    icon: "storage",
    prefix: "database/",
    collapsable: true,
    children: [
      {
        text: "SQL 必知必会 50 题",
        prefix: "sql-in-10min/",
        icon: "mysql",
        collapsable: true,
        children: [
          "1-5",
          "6-10",
          "11-15",
          "16-20",
          "21-25",
          "26-30",
          "31-35",
          "36-40",
          "41-45",
          "46-50",
        ],
      },
    ],
  },
  // 实战训练
  {
    text: "实战训练",
    icon: "app",
    prefix: "practical-training-camp/",
    collapsable: true,
    children: [
      {
        text: "SE 实训营",
        prefix: "java-se-in-action/",
        collapsable: true,
        icon: "ruanjian",
        children:[
          "score-management",
          "order-system",
          "tally-book",
          "mysql-mybatis-score-management",
        ]
      },
      {
        text: "Java 编程实例",
        prefix: "java-instance/",
        icon: "java",
        collapsable: true,
        children: [
          "1-5",
          "6-10",
          "11-15",
          "16-20",
          "21-25",
          "26-30",
          "31-35",
          "36-40",
          "41-45",
          "46-50",
          "51-55",
          "56-60",
          "61-65",
          "66-70",
          "71-75",
        ],
      },
    ],
  },
  // 开发工具
  {
    text: "开发工具",
    icon: "code",
    prefix: "dev-tools/",
    collapsable: true,
    children: [
      {
        text: "IntelliJ IDEA",
        prefix: "idea/",
        icon: "intellijidea",
        collapsable: true,
        children: [
          "idea-pro-with-student-email",
          "idea-guide",
          "idea-with-github",
          "idea-integrate-with-git",
          "idea-tips",
          "java-quick-start-with-idea",
          "connect-mysql-fail",
          "tomcat-console-error-code",
        ],
      },
    ],
  },
  // 效率工具
  {
    text: "效率工具",
    icon: "tool",
    prefix: "efficiency/",
    collapsable: true,
    children: [
      "e-signature",
      "gitee-typora",
      "github-img-bed",
      "markdown-in-10min",
      "paint-with-markdown",
      "write-tools",
      {
        text: "博客搭建",
        prefix: "blog/",
        icon: "blog",
        collapsable: true,
        children: [
          "hexo",
          "halo",
          "vuepress-github-action",
          "docsify",
        ],
      },
      {
        text: "Windows",
        prefix: "windows",
        icon: "windows",
        collapsable: true,
        children: [
          "how-to-make-usb-boot-drive",
          "windows-install",
          "how-to-use-windows10",
          "nodejs-install",
          "postgresql-install-on-windows",
        ],
      },
      {
        text: "macOS",
        prefix: "macos",
        icon: "macos",
        collapsable: true,
        children: [
          "item-oh-my-zsh",
        ],
      },
      {
        text: "Linux",
        prefix: "linux",
        icon: "linux",
        collapsable: true,
        children: [
          "ubuntu-install-with-vmware",
          "ubuntu-guide",
          "manjora-guide",
        ],
      },
    ],
  },
  {
    text: "福利专区",
    prefix: "welfare",
    icon: "fuli",
    collapsable: true,
    children: [
      "save-money-tips"
    ]
  },
]);
