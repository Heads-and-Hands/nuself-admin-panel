<template>
  <div class="order-page separate-page">
    <div class="order-title head-32-s">
      <i class="el-icon-back" @click="goToBack"></i>
      Заказ
    </div>
    <div class="separate-page-container">
      <div class="left-container">
        <section class="page-container common" ref="common">
          <div class="head-24-s title">
            Основное
          </div>
          <div class="main-item body-14-reg">
            <div class="container-inputs">
              <el-col class="info">
                <div class="sub-title">Номер заказа</div>
                <el-input
                    v-model="info.common.id"
                    disabled
                ></el-input>
              </el-col>
              <el-col class="info">
                <div class="sub-title">Дата и время создания </div>
                <el-input
                    v-model="info.common.creationDate"
                    disabled
                ></el-input>
              </el-col>
              <el-col class="status">
                <div class="sub-title">Статус заказа</div>
                <el-tag
                    :type="info.common.orderStatus === 'Доставлен' ? 'success' : 'warning'"
                    class="body-14-reg status-tag"
                >{{ info.common.orderStatus }}</el-tag>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col class="info">
                <div class="sub-title">Способ оплаты</div>
                <el-input
                    v-model="info.common.paymentType"
                    disabled
                ></el-input>
              </el-col>
              <el-col class="info">
                <div class="sub-title">Дата и время оплаты</div>
                <el-input
                    v-model="info.common.paymentDate"
                    disabled
                ></el-input>
              </el-col>
              <el-col class="status">
                <div class="sub-title">Статус оплаты</div>
                <el-tag
                    :type="info.common.paymentStatus === 'Оплачен' ? 'success' : 'warning'"
                    class="body-14-reg status-tag"
                >{{ info.common.paymentStatus }}</el-tag>
              </el-col>
            </div>
            <div class="container-inputs">
              <el-col class="textarea">
                <div class="sub-title">Комментарий клиента</div>
                <el-input
                    v-model="info.common.comment"
                    type="textarea"
                    disabled
                ></el-input>
              </el-col>
            </div>
          </div>
        </section>
        <section class="page-container delivery" ref="delivery">
          <div class="head-24-s title">
            Доставка
          </div>
          <div class="delivery-item body-14-reg">
            <div class="container-inputs full">
              <el-col>
                <div class="sub-title">Способ доставки</div>
                <el-input
                    v-model="info.delivery.deliveryType"
                    disabled
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs part">
              <el-col>
                <div class="sub-title">Трек номер</div>
                <el-input
                    v-model="info.delivery.trackNumber"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Дата и время доставки</div>
                <el-input
                    v-model="info.delivery.date"
                    disabled
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs part">
              <el-col>
                <div class="sub-title">Имя получателя</div>
                <el-input
                    v-model="info.delivery.receiverName"
                    disabled
                ></el-input>
              </el-col>
              <el-col>
                <div class="sub-title">Телефон получателя</div>
                <el-input
                    v-model="info.delivery.receiverPhone"
                    disabled
                ></el-input>
              </el-col>
            </div>
            <div class="container-inputs full">
              <el-col>
                <div class="sub-title">Адрес доставки</div>
                <el-input
                    v-model="info.delivery.address"
                    disabled
                ></el-input>
              </el-col>
            </div>
          </div>
        </section>
        <section class="page-container customer" ref="customer">
          <div class="head-24-s title">
            Клиент
          </div>
          <div class="customer-item body-14-reg">
            <el-table
                :data="customerTable"
                style="width: 100%">
              <el-table-column
                  prop="id"
                  label="ID"
                  width="50">
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="ФИО клиента"
                  width="181">
              </el-table-column>
              <el-table-column
                  prop="status"
                  label="Статус"
                  width="103">
                <template slot-scope="scope">
                  <el-tag
                      :type="scope.row.status === 'Активен' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ scope.row.status}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                  prop="phone"
                  label="Телефон"
                  width="149">
              </el-table-column>
              <el-table-column
                  prop="email"
                  label="E-mail"
                  width="177">
              </el-table-column>
              <el-table-column
                  width="56">
                <template slot-scope="scope">
                  <el-button icon="el-icon-right" circle></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </section>
        <section class="page-container promocodes" ref="promocodes">
          <div class="head-24-s title">
            Промокоды
          </div>
          <div class="promocodes-item body-14-reg">
            <el-table
                :data="promoTable"
                style="width: 100%">
              <el-table-column
                  prop="id"
                  label="ID"
                  width="41">
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="Название"
                  width="181">
              </el-table-column>
              <el-table-column
                  prop="sale"
                  label="Величина"
                  width="72">
              </el-table-column>
              <el-table-column
                  prop="status"
                  label="Статус"
                  width="103">
                <template slot-scope="scope">
                  <el-tag
                      :type="scope.row.status === 'Активен' ? 'success' : 'warning'"
                      class="body-14-reg status-tag"
                  >{{ scope.row.status}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                  prop="validity"
                  label="Срок действия"
                  width="104">
              </el-table-column>
              <el-table-column
                  prop="type"
                  label="Тип"
                  width="159">
              </el-table-column>
              <el-table-column
                  width="56">
                <template slot-scope="scope">
                  <el-button icon="el-icon-right" circle></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </section>
        <section class="page-container products" ref="products">
          <div class="head-24-s title">
            Товары и сумма
          </div>
          <div class="products-item body-14-reg">
            <el-table
                :data="info.products.list"
                style="width: 100%">
              <el-table-column
                  prop="id"
                  label="ID"
                  width="41">
              </el-table-column>
              <el-table-column
                  prop="image"
                  label="Фото"
                  width="76">
                <template slot-scope="scope">
                  <img :src="scope.row.image" class="image">
                </template>
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="Название"
              >
              </el-table-column>
              <el-table-column
                  prop="size"
                  label="Размер"
                  width="73">
              </el-table-column>
              <el-table-column
                  prop="count"
                  label="Кол-во"
                  width="116">
              </el-table-column>
              <el-table-column
                  prop="sale"
                  label="Скидка"
                  width="95">
              </el-table-column>
              <el-table-column
                  prop="price"
                  label="Цена"
                  width="92">
                <template slot-scope="scope">
                 <span>{{scope.row.price + ' ₽'}}</span>
                </template>
              </el-table-column>
              <el-table-column
                  width="56">
                <template slot-scope="scope">
                  <el-button icon="el-icon-right" circle></el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="sum body-14-s">
              <span class="text">Итого</span>
              <span class="num">{{sumOrder + ' ₽'}}</span>
            </div>
          </div>
        </section>
      </div>
      <right-side-bar v-if="navList.length" :list="navList"/>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>