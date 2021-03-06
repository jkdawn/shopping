package com.team6.controller;

import com.team6.service.Goods.GoodsService;
import com.team6.service.login.LoginService;
import com.team6.service.rb.RbService;
import org.noggit.JSONUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.List;
import java.util.Map;

@Controller
public class IndexContorller {
    private static final Logger logger = LoggerFactory.getLogger(IndexContorller.class);

    @Autowired
    LoginService loginService;
    @Autowired
    GoodsService goodsService;
    @Autowired
    RbService rbService;



    @RequestMapping("/index")
    public String toIndex(){

        return "/Main/Index";
    }

    @RequestMapping("/index1")
    public String toIndex1(){

        return "/Main/Index1";
    }

    /**
     * 首页一些需要的信息的信息
     *
     * @param model
     * @param request
     * @param response
     * @return
     */

    @ResponseBody
    @RequestMapping(value = "/indexData",method = RequestMethod.POST, produces = "text/json;charset=UTF-8")
    public Object getIndexPageInfo(Model model,
                                  HttpServletRequest request, HttpServletResponse response){

        //获取轮播图
        List rblist = (List)rbService.queryAllInfo();

        //商品信息
        List clist = goodsService.querySaleByGoodType();


        //用户信息
        Map<String,Object> map = loginService.getCurrentUserInfo(request);
        //用户userid和username
        model.addAttribute("user",map);
        //展示的商品
        model.addAttribute("clist",clist);
        //展示轮播图
        model.addAttribute("rblist",rblist);

        /*ModelAndView modelAndView = new ModelAndView("/Main/Index", "data",model);*/

        return JSONUtil.toJSON(model);
    }



    /**
     *
     * @return json格式
     */
    @ResponseBody
    @RequestMapping("/search/{key}")
    public Map search(/*TODO*/){

        return null;
    }
}
