cmake_minimum_required(VERSION 3.10)

# Nama proyek
project(mobile_project LANGUAGES CXX)

# Set compiler untuk proyek
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Set output build ke folder build_output
set(CMAKE_INSTALL_PREFIX ${CMAKE_SOURCE_DIR}/build_output)

# Tentukan sumber utama (binary)
add_executable(mobile_project "main.cc")

# Tambahkan library/framework Flutter
find_package(Flutter REQUIRED)
target_link_libraries(mobile_project PRIVATE Flutter)

# Tentukan lokasi output binary
set_target_properties(mobile_project PROPERTIES
    RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/build/linux/x64/debug/intermediates_do_not_run/"
)
