import dockerLogo from "../assets/images/svgs/docker.svg";
import html5Logo from "../assets/images/svgs/html5.svg";
import cssLogo from "../assets/images/svgs/css.svg";
import jqueryLogo from "../assets/images/svgs/jquery.svg";
import enonicLogo from "../assets/images/svgs/enonic.png";
import reduxLogo from "../assets/images/svgs/redux.svg";
import mysqlLogo from "../assets/images/svgs/mysql.svg";
import mongoLogo from "../assets/images/svgs/mongodb.svg";
import oracleLogo from "../assets/images/svgs/oracle.svg";
import gitLogo from "../assets/images/svgs/git.svg";
import githubLogo from "../assets/images/svgs/github.svg";
import gitlabLogo from "../assets/images/svgs/gitlab.svg";
import awsLogo from "../assets/images/svgs/aws.svg";
import datadogLogo from "../assets/images/svgs/datadog.svg";
import springMvcLogo from "../assets/images/svgs/springmvc.svg";
import thymeleafLogo from "../assets/images/svgs/thymleaf.png";
import angularLogo from "../assets/images/svgs/angular.svg";

import javaLogo from "../assets/images/svgs/java-vertical.svg";
import javascriptlogo from "../assets/images/svgs/javascript-vertical.svg";
import reactjsLogo from "../assets/images/svgs/reactjs-icon.svg";
import graphQlLogo from "../assets/images/svgs/graphql-icon.svg";
import nodeJsLogo from "../assets/images/svgs/nodejs-icon.svg";
import springLogo from "../assets/images/svgs/spring.svg";

import onlineWorkerImg from "../assets/images/online_worker/logo.PNG";

import pendingLogo from "../assets/images/svgs/pending.svg";

const getLogo = (skill) => {
  switch (skill) {
    case "Java":
      return javaLogo;
    case "JavaScript":
      return javascriptlogo;
    case "ReactJs":
      return reactjsLogo;
    case "Spring/ Spring Boot":
    case "Spring Boot":
      return springLogo;
    case "Spring MVC":
      return springMvcLogo;
    case "GraphQL":
      return graphQlLogo;
    case "NodeJs":
      return nodeJsLogo;
    case "Docker":
      return dockerLogo;
    case "HTML5":
      return html5Logo;
    case "CSS":
      return cssLogo;
    case "JQuery":
      return jqueryLogo;
    case "Redux":
      return reduxLogo;
    case "MySql":
      return mysqlLogo;
    case "MongoDB":
      return mongoLogo;
    case "OracleDB":
      return oracleLogo;
    case "Git":
      return gitLogo;
    case "Github":
      return githubLogo;
    case "Gitlab":
      return gitlabLogo;
    case "AWS":
      return awsLogo;
    case "DataDog":
      return datadogLogo;
    case "o_worker":
      return onlineWorkerImg;
    case "pending":
      return pendingLogo;
    case "Thymeleaf":
      return thymeleafLogo;
    case "Angular":
      return angularLogo;
    default:
      return "";
  }
};

export default getLogo;
