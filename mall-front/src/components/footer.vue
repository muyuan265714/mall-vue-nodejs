<template>
  <div class="footer clearfix">
    <div class="language">
      语言
      <select>
        <option>English</option>
        <option>中文</option>
      </select>
    </div>
    <div class="copyright">
      本网站由
      <a href="http://www.lfgym.cn">Yves</a>
      学习制作
    </div>
    <div class="links">
      <a href="#">联系我们</a>
      <a href="#">友情链接</a>
      <a href="#">电子邮件</a>
      <a href="#">招聘</a>
    </div>
  </div>
</template>
<style scoped>
  .footer{
    margin-top: 50px;
    padding:0 36px;
    color: #ada9a5;
    font-size: 14px;
    line-height: 100px;
    border-top:1px solid rgba(51,51,51,.15);
  }
  .footer > div{
    float: left;
  }
  .footer .language{
    margin-left: 15px;
  }
  .language select {
    color: #ada9a5;
  }
  .footer > div.copyright{
    position: absolute;
    width: 10%;
    text-align: center;
    margin: 0 45%;
  }
  .footer > div.links{
    float: right;
  }
  .links >a {
    color: #ada9a5;
    font-size: 14px;
    margin-right: 20px;
  }
</style>
<script>
</script>
