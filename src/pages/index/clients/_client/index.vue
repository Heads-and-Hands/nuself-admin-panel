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
                    class="inline-input"
                    v-model="clientData.common.name"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Фамилия</div>
                <el-input
                    class="inline-input"
                    v-model="clientData.common.surname"
                    disabled
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">Дата рождения</div>
                <el-input
                    class="inline-input"
                    v-model="clientData.common.birthday"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Дата последнего входа</div>
                <el-input
                    class="inline-input"
                    v-model="clientData.common.lastLogin"
                    disabled
                ></el-input>
              </el-col>
              <el-col class="status">
                <div class="sub-title">Статус</div>
                <div class="status-container">
                  <el-tag
                      :type="clientData.common.status === 'Активен' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ clientData.common.status }}</el-tag>
                  <el-button
                      icon="el-icon-edit"
                      circle
                      style="background-color: #292B33; color: white"
                      @click="dialogStatusVisible = true"
                  ></el-button>
                </div>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">Телефон</div>
                <el-input
                    class="inline-input"
                    v-model="clientData.common.phone"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">E-mail</div>
                <el-input
                    class="inline-input"
                    v-model="clientData.common.email"
                    disabled
                ></el-input>
              </el-col>
            </div>
          </div>
        </section>
        <section class="page-container address" ref="address">
          <div class="head-24-s title">
            Адреса клиента <span class="limit">{{clientData.address.length}}</span>
          </div>
          <div class="main-item body-14-reg" v-for="(address, index) in clientData.address" :key="index">
            <span class="address-title head-18-s">Адрес {{index + 1}}</span>
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">Город</div>
                <el-input
                    class="inline-input"
                    v-model="address.city"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Улица</div>
                <el-input
                    class="inline-input"
                    v-model="address.street"
                    disabled
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">Дом, корпус</div>
                <el-input
                    class="inline-input"
                    v-model="address.house"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Квартира / офис</div>
                <el-input
                    class="inline-input"
                    v-model="address.flat"
                    disabled
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col>
                <div class="sub-title">Подъезд</div>
                <el-input
                    class="inline-input"
                    v-model="address.porch"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Этаж</div>
                <el-input
                    class="inline-input"
                    v-model="address.floor"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Домофон</div>
                <el-input
                    class="inline-input"
                    v-model="address.intercom"
                    disabled
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col class="textarea">
                <div class="sub-title">Комментарий к адресу</div>
                <el-input
                    class="inline-input"
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
            Заказы <span class="limit">{{clientData.orders.list.length}}</span>
          </div>
          <div class="orders-item body-14-reg">
            <el-table
                :data="clientData.orders.list"
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
                <template slot-scope="scope">
                  <el-button icon="el-icon-right" circle></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </section>
      </div>
      <right-side-bar
          :list="navList"
          @scrollToBlock="scrollToBlock"/>
    </div>
    <el-dialog
        title="Изменить статусы"
        :visible.sync="dialogStatusVisible"
        width="551px"
        custom-class="change-status-modal"
    >
      <span class="subtitle body-14-reg">Выберите статус, который вы хотите истановить для выбранной категории</span>
      <div class="radio-container">
        <el-radio v-model="changeStatus" label="Активен" border>
          <el-tag type="success" class="body-14-reg">Активен</el-tag>
        </el-radio>
        <el-radio v-model="changeStatus" label="Неактивен" border>
          <el-tag type="warning" class="body-14-reg">Неактивен</el-tag>
        </el-radio>
        {{changeStatus}}
      </div>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogStatusVisible = false">Применить</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>