import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image
} from 'react-native';

import styles from '../styles'

import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Markdown from 'react-native-easy-markdown';

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
        
        <View style={{flex:1, alignItems: 'center'}}>
          <Image style={{width: 100, height: 100}} source={require('../images/utlogo.png')}/>
        </View>
        <Markdown markdownStyles={{block: {padding: 10},text:{fontSize: 16, color: 'black', fontFamily:'samim'},strong: {fontFamily: 'samim'},h3:{padding: 10, paddingTop: 20, fontSize: 22, color:'grey',fontFamily:'samim'}}}>
          {
          
          'ابزار حاضر توسط **آزمایشگاه شناختی دانشکدهٔ روانشناسی و علوم تربیتی دانشگاه تهران** به عنوان بخشی از یک پژوهش دانشگاهی توسعه یافته است. در این اپلیکیشن، شما می‌توانید در خانه هیپنوتیزم را تجربه کنید. صوت‌های از پیش ضبط شده در این نرم‌افزار، مبتنی بر متونی است که در پژوهش‌های علمی به وفور استفاده شده است. این متون برای استفاده در نرم‌افزار بهینه شده است تا شما تجربه‌ای همانند آنچه در کلینیک‌های روانشناسی می‌گذرد داشته باشید، و همهٔ این متون دارای پیشینهٔ پژوهشی معتبری در علوم شناختی است. صداهای مورد استفاده همگی به صورت تخصصی، تنها برای این نرم‌افزار ضبط و آماده‌سازی شده است.' +
          '\n\n' +
          'شما با شرکت در جلسه‌های مختلف و گوش سپردن کامل به متون ارئه شده می‌توانید هر بار امتیازی کسب نمایید. با جمع کردن امتیاز، جلسه‌های پیشرفته‌تر برای شما قابل دسترس می‌شود و هم‌چنین می‌توانید از جوایز مربوط به شرکت در جلسه‌ها بهره‌مند شوید. با کسب حداقل ۱۰۰ امتیاز، برای ۳۰ نفر این امکان به قید قرعه وجود خواهد داشت که امواج مغزی شما به رایگان در آزمایشگاه شناختی دانشگاه تهران ضبط و تحلیل گردد (هزینهٔ ایاب و ذهاب به آزمایشگاه توسط ما پرداخت خواهد شد). ضبط و تحلیل سیگنال مغزی (امواج غیرتهاجمی الکتروانسفالوگرام) در کلینیک‌های تخصصی شهر تهران، ارزشی مادی معادل با حداقل ۲۰۰ هزار تومان در تابستان ۱۳۹۶ دارد.' +
          '\n\n' +
          'و این هم خط بعدی هماهر چه بیشتر به صوت‌ها گوش دهید امتیاز بیشتری کسب خواهید نمود. هم‌چنین در ابتدا و پایان برخی از جلسه‌ها، برای تاثیرگذاری بهتر پرسش‌هایی مطرح می‌شود که با پاسخ‌گویی به آن‌ها نه تنها تجربهٔ هیپنوتیزم مناسب‌تری خواهید داشت، بلکه ما را در انجام پژوهش دانشگاهی کمک خواهید نمود.' +
          '\n\n'


          }
        </Markdown>
        
        <View style={{flex:1, flexDirection: 'row'}}>
          <Button
            style={[{flex:1, marginTop: 20, marginBottom: 30},styles.transparentButton]}
            onPress={() => this.props.navigation.navigate('ContactUs')}>
            <Icon name="envelope" size={26} color={'grey'}/>
            <Text style={[styles.buttonText, styles.rtl, {padding: 10, color: 'grey'}]}>
            تماس با ما
            </Text>
          </Button>

          <Button
            style={[{flex:1, marginTop: 20, marginBottom: 30},styles.transparentButton]}
            onPress={() => {}}>
            <Icon name="paper-plane" size={26} color={'grey'}/>
            <Text style={[styles.buttonText, styles.rtl, {padding: 10, color: 'grey'}]}>
            کانال تلگرام
            </Text>
          </Button>
        </View>
        
        <View style={{position: 'relative', flex:1, flexDirection: 'row',alignItems: 'center'}}>
          <Image resizeMode="contain" style={{flex:1, width: '100%'}} source={require('../images/ut.jpg')}/>
        </View>

        <Markdown markdownStyles={{block: {padding: 10},text:{fontSize: 16, color: 'black', fontFamily:'samim'},strong: {fontFamily: 'samim'},h3:{padding: 10, paddingTop: 20, fontSize: 22, color:'grey',fontFamily:'samim'}}}>
          {
          '### آیا هیپنوتیزم خطرناک است؟' +
          '\n\n' +
          'خیر. علی‌رغم باور عامه دربارهٔ هیپنوتیزم، هیچ چیز شرم‌آور یا خطرناکی در طی گوش دادن به اصوات و بعد از آن برایتان اتفاق نخواهد افتاد. شما همیشه در کنترل کامل رفتارتان خواهید بود.' +
          '\n\n' +


          '### چه شروطی برای دریافت جایزهٔ ضبط سیگنال لازم است؟' +
          '\n\n' +
          'حداقل ۱۸ سال داشته باشید، عدم مصرف داروهای موثر بر روان و روان‌گردان طی ۶ ماه گذشته، عدم وجود مشکل روانی که نیاز به مراجعه به پزشک داشته باشد، امکان حضور در دانشگاه تهران (پل گیشا) را داشته باشید، تمایل به تجربهٔ هیپنوتیزم به صورت آزمایشگاهی داشته باشید، به تمام اصوات موجود در نرم‌افزار به طور کامل گوش سپرده باشید (حداقل ۱۰۰ امتیاز) و به ما اجازه دهید اطلاعات مغزی شما را به طور ناشناس در پژوهش‌های آتی استفاده کنیم.' +
          '\n\n' +

          '### چه اطلاعاتی از من در این برنامه ذخیره می‌شود؟' +
          '\n\n' +
          'به جز اطلاعات تماس که می‌توانید به صورت داوطلبانه در اختیار ما قرار دهید، بقیهٔ موارد به صورت ناشناس ذخیره می‌شود (امکان اتصال داده‌های شما به اطلاعات تماس و نام شما وجود ندارد). این اطلاعات شامل این موارد می‌شود: پاسخ‌های شما به پرسش‌ها، برچسب‌های زمانی شروع و پایان جلسه، اطلاعات تماس به صورت داوطلبانه.' +
          '\n\n' + 


          '### از اطلاعات ذخیره شده چه استفاده‌ای می‌شود؟' +
          '\n\n' +
          'اطلاعات ذخیره شده برای محاسبهٔ امتیاز شما در مقایسه با کاربران دیگر استفاده خواهد شد. علاوه بر این، این اطلاعات برای پژوهشی در حوزهٔ علوم شناختی استفاده خواهد شد. تمام اطلاعات غیر قابل ارتباط به شما است. جمع‌آوری و استفاده از اطلاعات تحت نظر کمیتهٔ اخلاق پژوهشی صورت می‌گیرد.' +
          '\n\n' +

          '### چگونه می‌توانم دربارهٔ این نرم‌افزار اطلاعات بیشتری کسب کنم؟' +
          '\n\n' +
          'در بخش «تماس با ما» می‌توانید پیام خود را برای ما ارسال نمایید. همچنین در آن بخش اطلاعات کانال تلگرام ما نیز وجود دارد. اگر می‌خواهید به پرسش‌های شما پاسخ دهیم، اطلاعات تماس خود را در متن پیام خود ارسال نمایید.' +
          '\n\n' +

          '### چگونه می‌توانم از کسب جایزه مطلع گردم؟' +
          '\n\n' +
          'در صورتی که اطلاعات تماس خود را وارد کرده باشید، حداکثر بعد از ۲ هفته برای تعیین زمان با شما تماس خواهیم گرفت.' +
          '\n\n' +

          '### به جلسه‌ای گوش داده‌ام اما امتیازی برایم منظور نشد.' +
          '\n\n' +
          'تنها برای جلسه‌هایی که به طور کامل گوش دهید امتیاز منظور خواهد شد. پاسخ به پرسش‌های قبل و بعد از برخی جلسه‌ها نیز در کسب امتیاز موثر است.' +
          '\n\n' +

          '### اطلاعات تماس خود را وارد نکرده‌ام یا اشتباه وارد نموده‌ام.' +
          '\n\n' +
          'در صفحهٔ «خانه» بر روی «تغییر اطلاعات شخصی» کلیک کنید و مشخصات خود را وارد یا به‌روز نمایید.' +
          '\n\n'

        }
        </Markdown>
    
        <View style={{flex:1, flexDirection: 'row'}}>
          <Button
            style={[{flex:1, marginTop: 20, marginBottom: 30},styles.transparentButton]}
            onPress={() => this.props.navigation.navigate('ContactUs')}>
            <Icon name="envelope" size={26} color={'grey'}/>
            <Text style={[styles.buttonText, styles.rtl, {padding: 10, color: 'grey'}]}>
            تماس با ما
            </Text>
          </Button>

          <Button
            style={[{flex:1, marginTop: 20, marginBottom: 30},styles.transparentButton]}
            onPress={() => {}}>
            <Icon name="paper-plane" size={26} color={'grey'}/>
            <Text style={[styles.buttonText, styles.rtl, {padding: 10, color: 'grey'}]}>
            کانال تلگرام
            </Text>
          </Button>
        </View>

      </ScrollView>
    );
  }
}
