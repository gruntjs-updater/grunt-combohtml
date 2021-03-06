/*
  Copyright (C) 2012-2013 xudafeng <xudafeng@126.com>

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
;(function(root,factory){
    'use strict';
    /* amd like aml https://github.com/xudafeng/aml.git */
    if(typeof define === 'function' && define.amd) {
        return define(['exports'], factory);
    }else if(typeof exports !== 'undefined') {
        return factory(exports);
    }else{
    /* browser */
        factory(root['expsParse'] || (root['expsParse'] = {}));
    }
})(this,function(exports){

    /**
     * 表达式解析类
     * dafeng.xdf@taobao.com
     */
    function ExpsParse(cfg){
        /**
         * 存储each key队列
         * @type {Array}
         */
        this.passme = cfg.passme;
        this.index = [];
    };
    ExpsParse.prototype={
        /**
         * public
         * @param cfg
         * @returns {*}
         */
        parse:function(cfg){
            var exp = cfg.exp;
            var tokens = this.passme.tokenize(exp,{
                ecmascript:5,
                whiteSpace:false
            });
            return tokens;
        }
    };
    exports.expsParse = ExpsParse;
});
/* vim: set sw=4 ts=4 et tw=80 : */
