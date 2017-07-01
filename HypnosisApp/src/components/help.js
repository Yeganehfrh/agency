import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import styles from '../styles'

import Button from 'react-native-flat-button';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class HelpScreen extends Component {

  static navigationOptions = {
    tabBarLabel: 'راهنما',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="question" size={26} color={ focused ? 'rgb(0,0,0)' : 'rgb(204,204,204)'}/>
    ),
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        
        <Text style={[styles.title,styles.rtl]}>راهنمای استفاده</Text>

        <Text style={[styles.help,styles.rtl]}>ابزارِ رایگان حاضر، حاصل همکاری پژوهشکدهٔ علوم شناختی، دانشکدهٔ روانشناسی و علوم تربیتی دانشگاه تهران و تحت حمایت ستاد علوم شناختی توسعه یافته است. در این ابزار، با استفاده از صوت‌های از پیش ضبط شده، شما هیپنوتیزم را تجربه خواهید نمود. متون مورد استفاده همگی پیشینهٔ پژوهشی معتبری در علوم شناختی دارند و به وفور در آزمایش‌های مختلف مورد استفاده قرار گرفته‌اند. صداهای مورد استفاده همگی به صورت تخصصی، تنها برای این نرم‌افزار ضبط و آماده‌سازی شده است تا شما بتوانید بهترین تجربهٔ هیپنوتیزم را داشته باشید. لازم به ذکر است که علی‌رغم باور عامه دربارهٔ هیپنوتیزم هیچ اتفاق شرم‌آور یا خطرناکی در طی گوش دادن به اصوات و بعد از آن برایتان نخواهد افتاد. شما در کنترل کامل رفتارتان خواهید بود.</Text>
        <Text style={[styles.help,styles.rtl]}>شما با انجام موفقیت‌آمیز هر جلسهٔ هیپنوتیزم (به طور کامل)، امتیازی کسب می‌کنید. این امتیاز برای دسترسی به جلسه‌های پیچیده‌تر به کار می‌رود. در ابتدا و پایان هر جلسه، برای تضمین تاثیرگذاری بهتر پرسش‌هایی مطرح می‌شود که با پاسخ‌گویی درست به آن تجربهٔ هیپنوتیزم مناسب‌تری خواهید داشت.</Text>
        <Text style={[styles.help,styles.rtl]}>در صورتی که شما، حداقل ۲۰۰ امتیاز کسب کنید، می‌توانید از جوایز دیگری هم‌چون ضبط و تحلیل رایگان سیگنال‌های غیرتهاجمی انسفالوگرام استفاده کنید. این جایزه در کلینیک‌های تخصصی مغز، ارزشی مادی معادل با حداقل ۲۰۰ هزار تومان (سال ۱۳۹۶) دارد.</Text>
        
        <Text style={[styles.title,styles.rtl]}>تماس با ما</Text>
        <Text style={[styles.help,styles.rtl]}>از طریق کانال تلگرام @CognitiveHypnosis با ما مکاتبه نمایید. قدردان نظرات، پیشنهادات و انتقادات شما خواهیم بود.</Text>
        
        <View style={styles.aboutButtonContainer}>
          <Button
            color="#841584"
            type="neutral"
            containerStyle={styles.button}
            onPress={() => this.props.navigation.navigate('About')}>
              <Text style={styles.rtl}>تماس با ما</Text>
            </Button>
          </View>
      </ScrollView>
    );
  }
}
