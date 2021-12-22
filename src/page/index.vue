<template>
  <div id="root" style="background-color: bisque">
    <header class="header">
      <div class="header__business text--center">
        <div class="header__business__logo">
          <img
            src="../assets/logo_20211119232945.png"
            alt="In Salon"
            class="header__business__logo__image"
          />
        </div>
        <h1 class="header__business__name">In Salon</h1>
        <p class="header__business__address">
          <svg viewBox="0 0 20.5 24.25" class="header__business__icon">
            <title>Asset 1</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_3" data-name="Layer 3">
                <path
                  d="M10.25,24.25A1,1,0,0,1,9.6,24c-1-.84-9.6-8.34-9.6-13.76a10.25,10.25,0,0,1,20.5,0c0,5.42-8.62,12.92-9.6,13.76a1,1,0,0,1-.65.24ZM10.25,2A8.26,8.26,0,0,0,2,10.25c0,3.51,5.46,9.15,8.25,11.67C13,19.4,18.5,13.76,18.5,10.25A8.26,8.26,0,0,0,10.25,2Z"
                  fill="#4f453c"
                ></path>
                <path
                  d="M10.25,15.25a5,5,0,1,1,5-5,5,5,0,0,1-5,5Zm0-8a3,3,0,1,0,3,3,3,3,0,0,0-3-3Z"
                  fill="#4f453c"
                ></path>
              </g>
            </g>
          </svg>
          <a
            href="http://maps.google.com/?q=11395 W Palmetto Park Rd Ste C, Boca Raton, FL 33428"
            target="_blank"
            >11395 W Palmetto Park Rd Ste C, Boca Raton, FL 33428</a
          >
        </p>
        <div
          class="header__business__contact flex flex--ai-center flex--jc-center"
        >
          <p class="header__business__contact--phone">
            <a href="tel: (561) 430-3638" target="_blank"
              ><svg viewBox="0 0 23.23 23.23" class="header__business__icon">
                <title>Asset 4</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_3" data-name="Layer 3">
                    <path
                      d="M18.33,23.23A18.24,18.24,0,0,1,5.7,17.61l-.08-.08h0A18.16,18.16,0,0,1,0,4.57V4.23L.22,4a13.14,13.14,0,0,1,1-1.09A12.08,12.08,0,0,1,5.43.11,1.88,1.88,0,0,1,6.08,0c.54,0,1.75.27,2.06,1.12.54,1.52,1.23,3.5,1.74,5.39a2.41,2.41,0,0,1-.74,2.28L7.37,9.91a1.28,1.28,0,0,0,.24.61A23.85,23.85,0,0,0,10,13.28a24.48,24.48,0,0,0,2.74,2.34,1,1,0,0,0,.56.21l.61-.85.56-.89a2.39,2.39,0,0,1,1.86-.78,1.48,1.48,0,0,1,.38,0,25.58,25.58,0,0,1,5.5,1.77,2.37,2.37,0,0,1,.93,2.69A12.08,12.08,0,0,1,20.36,22a14.39,14.39,0,0,1-1.1,1l-.27.21ZM2,5A16.46,16.46,0,0,0,7,16.12l.1.1a16.21,16.21,0,0,0,11.14,5c.23-.19.46-.4.67-.6a10.21,10.21,0,0,0,2.3-3.55s-.05-.13-.09-.22a23.68,23.68,0,0,0-4.91-1.56l-.24,0-1,1.58a2.46,2.46,0,0,1-3.48.31,28.53,28.53,0,0,1-3-2.54A27.77,27.77,0,0,1,6,11.7a2.84,2.84,0,0,1-.55-2.19,2,2,0,0,1,.87-1.29l1.58-1a1.6,1.6,0,0,0,0-.27C7.49,5.3,6.86,3.5,6.35,2.06A.94.94,0,0,0,6.08,2,10.37,10.37,0,0,0,2.6,4.29q-.3.3-.6.66Z"
                      fill="#4f453c"
                    ></path>
                  </g>
                </g>
              </svg>
              (561) 430-3638</a
            >
          </p>
          <p class="header__business__contact--email">
            <svg viewBox="0 0 22.88 16.6" class="header__business__icon">
              <title>Asset 3</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_3" data-name="Layer 3">
                  <path
                    d="M20.52,16.6H2.36A2.36,2.36,0,0,1,0,14.24V2.36A2.36,2.36,0,0,1,2.36,0H20.52a2.36,2.36,0,0,1,2.36,2.36V14.24a2.36,2.36,0,0,1-2.36,2.36ZM2.36,2A.36.36,0,0,0,2,2.36V14.24a.36.36,0,0,0,.36.36H20.52a.36.36,0,0,0,.36-.36V2.36A.36.36,0,0,0,20.52,2Z"
                    fill="#4f453c"
                  ></path>
                  <path
                    d="M20.52,16.1H2.36A1.87,1.87,0,0,1,.62,14.9a.5.5,0,0,1,.14-.55L7.85,8a.5.5,0,0,1,.66.74L1.73,14.82a.88.88,0,0,0,.63.28H20.52a.88.88,0,0,0,.63-.28L14.29,8.7A.5.5,0,0,1,15,8l7.17,6.39a.5.5,0,0,1,.14.55,1.87,1.87,0,0,1-1.74,1.2Z"
                    fill="#4f453c"
                  ></path>
                  <path
                    d="M11.44,11.61a.51.51,0,0,1-.33-.13L.76,2.25A.5.5,0,0,1,.62,1.7,1.87,1.87,0,0,1,2.36.5H20.52a1.87,1.87,0,0,1,1.74,1.2.5.5,0,0,1-.14.55L11.77,11.48a.51.51,0,0,1-.33.13ZM1.73,1.78l9.71,8.66,9.71-8.66a.84.84,0,0,0-.63-.28H2.36a.84.84,0,0,0-.63.28Z"
                    fill="#4f453c"
                  ></path>
                </g>
              </g>
            </svg>
            <a href="mailto:insalon41319@yahoo.com" target="_blank"
              >insalon41319@yahoo.com</a
            >
          </p>
        </div>
      </div>
    </header>
    <el-container>
      <el-main style="background-color: bisque">
        <el-form
          :show-message="false"
          :model="hotMailBean"
          ref="hotMailBean"
          class="demo-dynamic"
        >
          <h4 class="appointment__form__title">appointment date</h4>
          <el-form-item
            prop="bookingTime"
            :rules="[
              {
                required: true,
                message: 'Please input date',
                trigger: 'change',
              },
            ]"
          >
            <el-date-picker
              style="font-size: 18px"
              v-model="hotMailBean.bookingTime"
              type="date"
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              placeholder="Select Date"
              :picker-options="pickerOptions1"
            >
            </el-date-picker>
          </el-form-item>
          <h4 class="appointment__form__title text--center">select services</h4>
          <el-row v-for="(item, index) in hotMailBean.formList" :key="index">
            <el-form-item
              :prop="'formList.' + index + '.serviceName'"
              :rules="[
                { required: true, message: '描述不能为空', trigger: 'change' },
                { max: 32, message: '不超过32个字符', trigger: 'change' },
              ]"
            >
              <el-select
                style="font-size: 18px"
                v-model="item.serviceName"
                placeholder="Select Service"
              >
                <el-option-group
                  v-for="group in options"
                  :key="group.label"
                  :label="group.label"
                >
                  <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-option-group>
              </el-select>
            </el-form-item>
            <el-form-item
              :prop="'formList.' + index + '.staffName'"
              :rules="[
                {
                  required: true,
                  message: '参数名不能为空',
                  trigger: 'change',
                },
                { max: 32, message: '不超过32个字符', trigger: 'change' },
              ]"
            >
              <el-select
                style="font-size: 18px"
                v-model="item.staffName"
                placeholder="Select Staff"
              >
                <el-option
                  v-for="item in optionstaff"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              :prop="'formList.' + index + '.serviceTime'"
              :rules="[
                { required: true, message: '描述不能为空', trigger: 'change' },
                { max: 32, message: '不超过32个字符', trigger: 'change' },
              ]"
            >
              <el-time-select
                style="font-size: 18px"
                v-model="item.serviceTime"
                :picker-options="{
                  start: '09:00',
                  step: '00:15',
                  end: '20:30',
                }"
                placeholder="Select time"
              >
              </el-time-select>
            </el-form-item>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              v-if="hotMailBean.formList.length > 1"
              size="medium"
              @click="removeDomain(item)"
            >
            </el-button>
          </el-row>
          <el-form-item>
            <el-button
              style="background-color: #f23fca; border-color: #f23fca"
              type="success"
              @click="addDomain"
              >New services</el-button
            >
          </el-form-item>

          <h4 class="appointment__form__title text--center">
            customer information
          </h4>

          <el-form-item
            prop="bookingName"
            :rules="[
              {
                required: true,
                message: 'Please input name',
                trigger: 'blur',
              },
            ]"
          >
            <el-input
              style="width: 220px; font-size: 18px"
              placeholder="enter name"
              v-model="hotMailBean.bookingName"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="businessNumber"
            :rules="[
              {
                required: true,
                message: 'Please input businessNumber',
                trigger: 'blur',
              },
            ]"
          >
            <el-input
              style="width: 220px; font-size: 18px"
              placeholder="enter mobile"
              v-model="hotMailBean.businessNumber"
              v-on:input="validateMobile"
              maxlength="12"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="bookingEmail"
            :rules="[
              {
                required: true,
                message: 'Please input email',
                trigger: 'blur',
              },
              {
                type: 'email',
                message: 'Please input correct email address',
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input
              style="width: 220px; font-size: 18px"
              placeholder="enter email"
              v-model="hotMailBean.bookingEmail"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('hotMailBean')"
              >Submit</el-button
            >
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
    <div class="text--center" style="height: 40px">
      <h6 class="footer__text">Powered by Network 8 Inc</h6>
    </div>
  </div>
</template>
<script>
import { showLoading, hideLoading } from "../utile/loading";
export default {
  data() {
    return {
      optionstaff: [
        {
          value: "Specialist-1",
          label: "Specialist-1",
        },
        {
          value: "Specialist-2",
          label: "Specialist-2",
        },
        {
          value: "Specialist-3",
          label: "Specialist-3",
        },
        {
          value: "Specialist-4",
          label: "Specialist-4",
        },
        {
          value: "Specialist-5",
          label: "Specialist-5",
        },
      ],
      options: [
        {
          label: "hair service",
          options: [
            {
              value: "Men Haircut-$35+",
              label: "Men Haircut-$35+",
            },
            {
              value: "Women Haircut-$55+",
              label: "Women Haircut-$55+",
            },
            {
              value: "Shampoo Blowout Style-$30+",
              label: "Shampoo Blowout Style-$30+",
            },
            {
              value: "Root touch-$55+",
              label: "Root touch-$55+",
            },
            {
              value: "Double process Color-$85+",
              label: "Double process Color-$85+",
            },
            {
              value: "Partial Highlights-$85+",
              label: "Partial Highlights-$85+",
            },
            {
              value: "Full Highlights-$120-$200",
              label: "Full Highlights-$120-$200",
            },
            {
              value: "Balayage-$150+",
              label: "Balayage-$150+",
            },
            {
              value: "Ombré-$150+",
              label: "Ombré-$150+",
            },
          ],
        },
        {
          label: "Perm&Treatment",
          options: [
            {
              value: "Class Perm-$110-$200",
              label: "Class Perm-$110-$200",
            },
            {
              value: "Digital Perm-$250-$350",
              label: "Digital Perm-$250-$350",
            },
            {
              value: "Japanese straightening-$250-$500",
              label: "Japanese straightening-$250-$500",
            },
            {
              value: "Milbon Deep Repair-$100",
              label: "Milbon Deep Repair-$100",
            },
            {
              value: "Milbon Scalp Treatment-$50",
              label: "Milbon Scalp Treatment-$50",
            },
            {
              value: "Schwarzkopf hair-spa treatment-$50",
              label: "Schwarzkopf hair-spa treatment-$50",
            },
          ],
        },
      ],
      hotMailBean: {
        companyId: "1001",
        formList: [{ serviceName: "", serviceTime: "", staffName: "" }],
        bookingEmail: "",
        bookingTime: "",
        bookingName: "",
        businessNumber: "",
      },
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
      },
    };
  },
  methods: {
    validateMobile(val) {
      if (val.length < 13) {
        if (val.length > 3 && val.length < 7) {
          val = val
            .replace(/\s/g, "-")
            .replace(/[^\d]/g, "-")
            .replace(/(\d{3})(?=\d)/g, "$1 ");
        } else if (val.length > 8 && val.length < 12) {
          val = val
            .replace(/\s/g, "-")
            .replace(/[^\d]/g, "-")
            .replace(/(\d{3})(?=\d)/g, "$1 ");
        }
        this.$set(this.hotMailBean, "businessNumber", val);
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          showLoading();
          this.axios({
            url: "/insalonhair/online/hotmail",
            method: "post",
            data: this.$qs.parse(this.hotMailBean),
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
          })
            .then((res) => {
              if (res.data.code == "0") {
                hideLoading();
                this.$message({
                  message: "Congrats,Booking Success",
                  type: "success",
                  duration: 5000,
                  offset: 200,
                });
                this.hotMailBean = {
                  companyId: "1001",
                  formList: [
                    { serviceName: "", serviceTime: "", staffName: "" },
                  ],
                  bookingEmail: "",
                  bookingTime: "",
                  bookingName: "",
                  businessNumber: "",
                };
              } else {
                this.$message({
                  message: "Booking Failed",
                  type: "error",
                  duration: 5000,
                  offset: 200,
                });
              }
            })
            .catch((error) => {
              this.$message({
                message: "System error",
                type: "error",
                duration: 5000,
                offset: 200,
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    removeDomain(item) {
      var index = this.hotMailBean.formList.indexOf(item);
      if (index !== -1) {
        this.hotMailBean.formList.splice(index, 1);
      }
    },
    addDomain() {
      this.hotMailBean.formList.push({
        staffName: "",
        serviceTime: "",
        serviceName: "",
      });
    },
  },
};
</script>
<style lang="css">
@import "../style/index.css";
</style>
<style scoped>
.appointment__form__title {
  font-weight: 300;
  margin-bottom: 20 px;
}
.text--center {
  text-align: center;
}
.el-main {
  background-color: #fffeff;
  color: #333;
  text-align: center;
  line-height: 30px;
  width: 10%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>