package com.team6.util.enums;

/**
 * 登陆模块的一些信息
 */
public enum LoginEnum {
   //登陆信息
    LOGIN_SUCCESS("success"),
    Login_ERROR("登陆失败"),
    LOGIN_VCODE_ERROR("验证码错误"),
    LOGIN_COOKIE_TOKEN_NAME("token"),  //cookie的名字

    //注册信息
    REGIEST_SUCCESS("注册成功"),
    REGIEST_COUNT_EXIST("用户已存在"),
    REGIEST_ERROR("数据异常,注册失败"),

    //update 信息
    UPDATE_CONUT_EMPTY("修改失败，用户不存在"),
    UPDATE_PASSWORD_SUCCESS("修改密码成功"),
    UPDATE_PASSWORD_ERROR("修改密码失败");

    private String Info;

    LoginEnum(String info) {
        Info = info;
    }

    public String getInfo() {
        return Info;
    }

    public void setInfo(String info) {
        Info = info;
    }
}
