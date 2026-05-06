import React from 'react'
import { Link } from 'react-router-dom'

export default function VendorCard({ vendor }) {
  return (
    <Link to={`/vendor/${vendor.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer h-full">
        {/* Image */}
        <div className="relative">
          <img 
            src={vendor.image} 
            alt={vendor.name}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          {vendor.verified && (
            <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              ✓ Verified
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Name & Category */}
          <div className="mb-2">
            <h3 className="font-bold text-lg text-gray-900">{vendor.name}</h3>
            <p className="text-sm text-gray-500">{vendor.category}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < vendor.rating ? '⭐' : '☆'}>
                  {i < vendor.rating ? '⭐' : '☆'}
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {vendor.rating} ({vendor.reviews} reviews)
            </span>
          </div>

          {/* Price Range */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Price Range</p>
            <p className="font-bold text-primary text-lg">₹{vendor.priceMin.toLocaleString()} - ₹{vendor.priceMax.toLocaleString()}</p>
          </div>

          {/* Location */}
          <p className="text-sm text-gray-600 mb-4">
            📍 {vendor.location}
          </p>

          {/* CTA Button */}
          <button className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition">
            View Profile
          </button>
        </div>
      </div>
    </Link>
  )
}
