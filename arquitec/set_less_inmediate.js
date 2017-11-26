
function set_less_inmediate(){

    function func_pc_1(){
      $("#line-25").animate({
          height:"-=100%"
        }, speed, function() {
          $("#line-26").animate({
              width: "+=100%"
            }, speed, function() {
              $("#line-27").animate({
                  height: "+=100%"
                }, speed, function() {

                });
            });
        });
    }
    function func_pc_2(){
      $("#line-31").animate({
          height: "+=100%"
        }, speed, function() {
          $("#line-32").animate({
              width: "+=100%"
            }, speed, function() {
              $("#line-33").animate({
                  height: "-=100%"
                }, speed, function() {

                });
            });
        });
    }
    //alert("add");
  var speed=1000;

    function reg_inst(){
      $("#line-44").animate({
            height: "+=100%"
        }, speed,function(){
              $("#line-45").animate({
                  width:"+=100%"
                }, speed,function(){
                      $("#line-46").animate({
                          height:"-=100%"
                        }, speed,function(){
                          $("#line-48").animate({
                              width:"+=100%"
                            }, speed);
                        });

                });
            });

    }
    function box_final(){
      $("#final-box").css("border-left","40px solid rgb(63, 165, 191) ");
      up_pop(3,"#final-box");
      $("#line-24").animate({
            width:"+=100%"}, speed,function(){
              $("#line-22").animate({
                    height:"-=100%"}, speed,function(){
                    $("#line-21").animate({
                            width:"-=100%"}, speed,function(){
                            $("#line-20").animate({
                                height:"+=100%"}, speed,function(){
                                $("#line-23").animate({
                                      width:"+=100%"}, speed,function(){
                                            $("#pc-box").css("background-color","rgba(0,0,0,0.8)");
                                              up_pop(1,"#pc-box");
                                        });

                                  });
                        });

                    });
            });

    }
    function Alu_fun(){
        $("#alu-box").css("background-color","rgba(66,170,54,0.8)");
          up_pop("+","#alu-box");
          $("#line-17").animate({
              width:"+=60%"}, speed,function(){
              $("#reg-z-box").css("background-color","rgba(0,0,0,0.8)");
              $("#line-18").animate({ width:"+=100%"},speed);
              $("#line-17").animate({ width:"+=40%"},speed);
              $("#line-38").animate({
                  height:"+=100%"}, speed,function(){
                  $("#line-39").animate({
                        width:"+=100%"}, speed,function(){
                          $("#line-40").animate({
                                height:"-=100%"}, speed,function(){
                                  $("#line-50").animate({
                                        width:"+=100%"}, speed,box_final);
                                });
                        });
                  });
                });
    }
    function reg_file(){
          $("#Reg-file").css("background-color","rgba(219,144,54,0.8)");
            up_pop(1,"#Reg-file");
          $("#line-11").animate({width:"+=100%"}, speed,function(){
              $("#reg-x-box").css("background-color","rgba(0,0,0,0.8)");
              $("#line-13").animate({
                  width:"+=100%"}, speed,function() {
                    up_pop(0,"#mux-x-box");
                  $("#mux-x-box").css("border-left", "40px solid rgb(63, 165, 191)");
                  $("#line-15").animate({
                      width:"+=100%"}, speed,Alu_fun);

              });
          });
          $("#line-12").animate({width:"+=100%"}, speed,function() {
              $("#reg-y-box").css("background-color","rgba(0,0,0,0.8)");
              $("#line-14").animate({
                  width:"+=100%"}, speed,function() {
                  up_pop(0,"#mux-y-box");
                  $("#mux-y-box").css("border-left"," 40px solid rgb(63, 165, 191)");
                  up_pop(3,"#mux-y-box");
                  $("#line-16").animate({
                      width:"+=100%"}, speed);

                    });

              });

    }
    function inst_data_reg(){
    $("#line-4").animate({width:"+=100%"}, speed);
    $("#line-6").animate({
        width:"+=100%"
      }, speed,function(){
            $("#up-post-box").css("border-left", "40px solid rgb(63, 165, 191)");
            up_pop(1,"#up-post-box");
            $("#line-9").animate({
                width:"+=100%"
              }, speed,reg_file);

      });
      $("#line-7").animate({
                width:"+=100%"
              }, speed,reg_inst);
    }
    function func_cache(){
      $("#line-41").css("height","33%");
        $("#line-41").animate({
            width: "+=100%"
          }, speed, function() {
            $("#line-42").animate({
                width: "+=100%"
              }, speed, function() {
                up_pop(1,"#reg-inst-box");
                $("#reg-inst-box").css("background-color","rgba(0,0,0,0.8)");
               });

              inst_data_reg();

        });
    }
      $("#line-1").animate({
        width: "+=50%"
      }, speed, function() {
        $("#line-1").animate({
          width: "+=100%"
        }, speed,function() {
          up_pop(0,"#inst-data");
          $("#inst-data").css("border-left","40px solid rgb(63,165,191)");
          $("#line-2").animate({
            width: "+=100%"
          }, speed, function() {
            up_pop(1,"#cache-box");
            $("#cache-box").css("background-color","rgb(210,224,50)");
            $("#line-3").animate({
              width: "+=100%"
            }, speed,func_cache);
         });
         });
      });

}
