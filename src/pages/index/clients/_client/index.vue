<template>
  <div class="client-page separate-page">
    <div class="head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      Клиент
    </div>
    <div class="separate-page-container">
      <div class="left-container">
        <section class="page-container common" ref="common">
          <div class="head-24-s title">
            Основное
          </div>
          <div class="main-item body-14-reg">
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">Имя</div>
                <el-input
                    v-model="data.common.name"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Фамилия</div>
                <el-input
                    v-model="data.common.surname"
                    disabled
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">Дата рождения</div>
                <el-input
                    v-model="data.common.birthday"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Дата последнего входа</div>
                <el-input
                    v-model="data.common.lastLogin"
                    disabled
                ></el-input>
              </el-col>
              <el-col class="status">
                <div class="sub-title">Статус</div>
                <div class="status-container">
                  <status-btn
                      :status="data.common.status"
                      type="active"
                      edit
                      @openStatusModal="dialogStatusVisible = true"
                  />
                </div>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">Телефон</div>
                <el-input
                    v-model="data.common.phone"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">E-mail</div>
                <el-input
                    v-model="data.common.email"
                    disabled
                ></el-input>
              </el-col>
            </div>
          </div>
        </section>
        <section class="page-container address" ref="address">
          <div class="head-24-s title">
            Адреса клиента <span class="limit">{{data.address.length}}</span>
          </div>
          <div class="main-item body-14-reg" v-for="(address, index) in data.address" :key="index">
            <span class="address-title head-18-s">Адрес {{index + 1}}</span>
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">Город</div>
                <el-input
                    v-model="address.city"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Улица</div>
                <el-input
                    v-model="address.street"
                    disabled
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">Дом, корпус</div>
                <el-input
                    v-model="address.house"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Квартира / офис</div>
                <el-input
                    v-model="address.flat"
                    disabled
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">Подъезд</div>
                <el-input
                    v-model="address.porch"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Этаж</div>
                <el-input
                    v-model="address.floor"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Домофон</div>
                <el-input
                    v-model="address.intercom"
                    disabled
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col class="textarea">
                <div class="sub-title">Комментарий к адресу</div>
                <el-input
                    v-model="address.comment"
                    type="textarea"
                    disabled
                ></el-input>
              </el-col>
            </div>
          </div>
        </section>
        <section class="page-container orders" ref="orders">
          <div class="head-24-s title">
            Заказы <span class="limit">{{data.orders.list.length}}</span>
          </div>
          <div class="orders-item body-14-reg">
            <el-table
                :data="data.orders.list"
                style="width: 100%">
              <el-table-column
                  prop="id"
                  label="Номер"
                  width="97">
              </el-table-column>
              <el-table-column
                  prop="date"
                  label="Дата"
                  width="165">
              </el-table-column>
              <el-table-column
                  prop="status"
                  label="Статус заказа"
                  width="133"
              >
                <template slot-scope="scope">
                  <el-tag
                      :type="scope.row.status === 'Доставлен' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ scope.row.status }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                  prop="orderType"
                  label="Способ оплаты"
                  width="149">
              </el-table-column>
              <el-table-column
                  prop="price"
                  label="Сумма"
                  width="96">
                <template slot-scope="scope">
                  <span>{{scope.row.price + ' ₽'}}</span>
                </template>
              </el-table-column>
              <el-table-column
                  width="72">
                <template>
                  <el-button icon="el-icon-right" circle></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </section>
      </div>
      <right-side-bar v-if="navList.length" :list="navList"/>
    </div>

    <toggle-status
        :dialogVisible="dialogStatusVisible"
        :status="data.common.status"
        type="active"
        text="выбранного клиента"
        @close="dialogStatusVisible = false"
        @change-status="changeStatus"
    />
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>