/**
 * @description 文件上传封装组件
 * @author wanglingkai
 * @date 2019-12-21
 */

const UploaderPlugin = function() {};

UploaderPlugin.allowLoadAccept = [
  {
    type: "image",
    accepts: ".png,.jpg,.jepg",
    multiple: true,
    maxSzie: 1024 * 1024 * 2
  },
  {
    type: "video",
    accepts: ".mp3,.mp4,.avi,.3gp,.wmv,.mpg,.mov",
    multiple: true,
    maxSzie: 1024 * 1024 * 2
  },
  {
    type: "doc",
    accepts: ".doc,.docx,.ppt,.pptx,.xls",
    multiple: true,
    maxSzie: 1024 * 1024 * 2
  }
];

UploaderPlugin.componentContent = {
  data() {
    return {};
  },
  render(h) {
    let childs = [];
    for (let i = 0; i < UploaderPlugin.allowLoadAccept.length; i++) {
      let el = UploaderPlugin.allowLoadAccept[i];
      childs.push(
        h("input", {
          domProps: {
            type: "file",
            accept: el.accepts,
            multiple: el.multiple
          },
          attr: {
            uploadType: el.type
          },
          ref: el.type
        })
      );
    }
    return h("div", { style: { display: "none" } }, childs);
  },
  methods: {
    /**
     * @description 文件上传method
     * @param {*} type 上传文件类型
     * @param {*} options 其他自定义选项
     * @returns Promise
     * @how use this methos
     * 在需要上传文件的方法中
     * this.uploader.upload('image', {
     *   multiple: false,
     *   progress: function (e) {}, // 如监听上传进度
     *   getFileInfo: function () {}  // 接受文件上传后接口的返回信息
     * })
     */
    upload(type, options) {
      let allowed = UploaderPlugin.allowLoadAccept.find(item => {
        return item.type === type.toLowerCase();
      });
      if (allowed) {
        this.$refs[type].multiple = options.multiple || false;
        this.$refs[type].click();
        // 后面就可以写自己和业务相关的逻辑代码了
      } else {
        console.log(new Error("文件类型不存在"));
      }
    }
  }
};

UploaderPlugin.install = function(Vue, options) {
  const UploadComponet = Vue.extend(UploaderPlugin.componentContent);
  const upload = new UploadComponet();
  document.body.appendChild(upload.$mount().$el);
  Vue.prototype.uploader = upload;
};

export default UploaderPlugin;
