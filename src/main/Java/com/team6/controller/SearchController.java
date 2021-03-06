package com.team6.controller;/**
 * Created by VLoye on 2018/10/17.
 */

import com.alibaba.druid.support.json.JSONUtils;
import com.team6.service.SearchService;
import com.team6.util.HostHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author VLoye
 * @ClassName SearchController
 * @Description
 * @Date 15:34  2018/10/17
 * @Version 1.0
 **/
@Controller
public class SearchController {

    @Autowired
    HostHolder hostHolder;
    @Autowired
    SearchService searchService;

    @RequestMapping(value = "/searchData",method = RequestMethod.GET)
    @ResponseBody
    public Object searchData(@RequestParam(value = "key" ,required = true)String key ,
                             @RequestParam(value = "brandid",required = false)Integer brandId,
                             @RequestParam(value = "typeid",required = false)Integer typeId){
        Map<String,Integer> conditions = new HashMap<String,Integer>();
        if(brandId!=null){
            conditions.put("b_id",brandId);
        }
        if(typeId!=null){
            conditions.put("t_id",typeId);
        }
        Map result = searchService.searchData(key,conditions);
        return result;
    }

    @RequestMapping(value = "/search",method = RequestMethod.GET )
    public ModelAndView search(@RequestParam(value = "key",required = true)String key){
        List brands = searchService.queryAllBrand();
        List types = searchService.queryAllType();
        Map<String,Object> map = new HashMap<>();
        map.put("brand",brands);
        map.put("type",types);
        map.put("key",key);
        return new ModelAndView("/ProductAndCart/ProductSearch",map);
    }
}
