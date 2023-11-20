import Card from "../../components/Card";

import Page from "../../components/Page";
import { InputWithClearBtn, MySelect } from "../../components/Input";

import { useForm, Controller } from "react-hook-form";
import { MyOption } from "../../components/Input/Selector";
const BatchTransfer = () => {
  const { formState, register, control, handleSubmit } = useForm<{
    apikey: string;
  }>();

  return (
    <div>
      <Page
        title="批量转账"
        tips="本程序完全本地运行，不会上传私钥到服务器，欢迎监督检测！"
      >
        <div className="flex w-full flex-row justify-around">
          <div className="w-1/2">
            {}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSubmit((data) => console.log(data, "data"));
                return;
              }}
            >
              <h1 className="break-before-all text-2xl font-semibold">
                快速将交易所内资产批量转移到多个钱包
              </h1>

              <MySelect label="请选择交易所">
                <MyOption value="111">
                  <div className="flex">
                    <div>币安</div>
                  </div>
                </MyOption>
                <MyOption value="222">333</MyOption>
              </MySelect>
              <MySelect label="请选择公链">
                <MyOption value="111">
                  <div className="flex">
                    <div>币安</div>
                  </div>
                </MyOption>
                <MyOption value="222">333</MyOption>
              </MySelect>
              <h1 className=" mt-8 break-before-all text-xl font-semibold">
                添加交易所APIKey
              </h1>
              <InputWithClearBtn
                label="APIKey"
                placeholder="复制交易的APIKEY 进行粘贴"
                type="text"
              ></InputWithClearBtn>
              <InputWithClearBtn
                label="APIKey"
                placeholder="复制交易的APIKEY 进行粘贴"
                type="text"
              ></InputWithClearBtn>
            </form>
          </div>
          <div className="mx-4 w-[1px] bg-gray-300"></div>
          <div className="w-1/2 px-2">
            <h1 className="text-2xl font-semibold">提现设置</h1>
            <MySelect label="请选择币种">
              <MyOption value="111">
                <div className="flex">
                  <div>币安</div>
                </div>
              </MyOption>
              <MyOption value="222">选择币种</MyOption>
            </MySelect>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default BatchTransfer;
