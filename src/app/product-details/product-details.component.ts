import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ProductMessage {
  id: number;
  message: string;
  price: number;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number; // Add the non-null assertion operator (!)

  productMessages: ProductMessage[] = [
    { id: 1, price: 300, message: 'Introducing our latest smartphone, the TechMaster X1! This cutting-edge device comes with a powerful octa-core processor, 8GB RAM, and a stunning 6.5-inch Super AMOLED display. Capture breathtaking photos with the 48MP triple-camera system, and enjoy all-day battery life with the 5000mAh battery. The TechMaster X1 is designed to deliver an unparalleled user experience, combining style, performance, and innovation. Get ready to redefine your smartphone experience with the TechMaster X1!'},
    { id: 2, price: 620, message: 'The iPhone 13 is rumored to have a similar design to the iPhone 12, with improved cameras, faster performance, and possibly a 120Hz display for smoother animations. It is expected to offer better battery life and run on the latest iOS version.'},
    { id: 3, price: 820, message: 'The MacBook Air is a lightweight and portable laptop from Apple. It features a high-resolution Retina display, powerful M1 chip for fast performance, and long battery life. The MacBook Air is known for its sleek design, excellent build quality, and comfortable keyboard. It is ideal for everyday tasks, productivity, and light creative work.'},
    { id: 4, price: 240, message: 'The Apple Watch is a smartwatch developed by Apple Inc. It is a wearable device that integrates with the iPhone and offers a wide range of features and functionalities. The Apple Watch allows users to track their fitness activities, monitor heart rate, receive notifications, make calls, send messages, and use various apps.'},
    { id: 5, price: 200, message: 'The OnePlus 9 is a flagship smartphone developed by OnePlus, a Chinese smartphone manufacturer. It is part of the OnePlus 9 series and was released in 2021. The OnePlus 9 comes with a range of impressive features and specifications, making it a popular choice among smartphone users.'},
    { id: 6, price: 100,message: 'The Realme mobile product detail can vary depending on the specific model. As of my last update in September 2021, Realme had various smartphone models with different specifications and features. Below is a general overview of some key features commonly found in Realme smartphones'},
    { id: 7, price:720, message: 'As of my last update in September 2021, Dell Latitude is a series of business-class laptops known for their durability, security features, and performance. The Latitude laptops are designed to meet the needs of professionals and corporate users, offering a range of configurations to suit different requirements. Below is a general overview of some key features commonly found in Dell Latitude laptops'},
  ];
  
  productMessage: string = ''; // Initialize the property
  productImageUrl: string = ''; // Add the productImageUrl property


  constructor(private route: ActivatedRoute) {}



getProductPrice(supplierId: number): number {
  const product = this.productMessages.find(p => p.id === supplierId);
  return product ? product.price : 0; // Return the price if found, or 0 if not found (or any default value you prefer)
}




  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id']; // Convert the route parameter value to a number
      // Now you can use this.productId in your component logic

      // Find the message for the current product ID
      const product = this.productMessages.find(p => p.id === this.productId);
      if (product) {
        this.productMessage = product.message;
      } else {
        this.productMessage = 'Product message not found'; // Default message if product ID is not found
      }
    });
  }
}

